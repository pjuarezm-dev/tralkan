const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // máx 5 envíos por IP por minuto
  message: { error: "Demasiados intentos, espera un momento." },
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/send-email", limiter);

const transporter = nodemailer.createTransport({
  host: "mail.tralkancomic.cl",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🔹 Función para cargar plantillas HTML dinámicamente
const loadHtmlTemplate = (filePath, variables) => {
  const path = require("path");
  const templatePath = path.join(__dirname, filePath);

  let template = fs.readFileSync(templatePath, "utf-8");
  Object.keys(variables).forEach((key) => {
    template = template.replace(new RegExp(`{{${key}}}`, "g"), variables[key]);
  });
  return template;
};

// 🔹 Función para enviar correo
const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: '"TralkanComic" <contacto@tralkancomic.cl>',
      to,
      subject,
      html,
    });

    console.log(`[${new Date().toISOString()}] Correo enviado a: ${to}`);
    return true;
  } catch (error) {
    console.error(`Error al enviar correo a ${to}:`, error);
    return false;
  }
};

// 🔹 Ruta para enviar correo con validación de reCAPTCHA
app.post("/send-email", async (req, res) => {
  try {
    if (req.body.trap && req.body.trap.trim() !== "") {
      return res.status(400).json({ error: "Bot detectado." });
    }
    const { name, email, message, token } = req.body;

    if (!name || !email || !message || !token) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    if (req.body.trap && req.body.trap.trim() !== "") {
      return res.status(400).json({ error: "Bot detectado." });
    }
    const secretKey = process.env.SECRETKEY;

    // Validación reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({ secret: secretKey, response: token }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({ error: "Error de reCAPTCHA" });
    }

    // Preparar contenido de correos
    const htmlContacto = loadHtmlTemplate("templates/contacto.html", {
      name,
      email,
      message,
    });

    const htmlRespuesta = loadHtmlTemplate("templates/respuesta.html", {
      name,
      message,
    });

    // Enviar correos
    const email1Sent = await sendEmail(
      process.env.MAIL_TO,
      "Nuevo mensaje de tralkancomic.cl",
      htmlContacto
    );
    const email2Sent = await sendEmail(
      email,
      "Gracias por contactarnos - TralkanComic",
      htmlRespuesta
    );

    if (email1Sent && email2Sent) {
      res.status(200).json({ message: "Correo enviado correctamente" });
    } else {
      res.status(500).json({ error: "Error al enviar correos" });
    }
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`)
);
