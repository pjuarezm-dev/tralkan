# 🌿 Tralkán Comic

Repositorio web oficial del cómic **Tralkán, susurros de la Ñukemapu**, una obra que entrelaza mitología mapuche con narrativa visual y sonora.

Proyecto financiado por el Fondo de Cultura del Ministerio de las Culturas, las Artes y el Patrimonio.

## [Sitio web](https://www.tralkancomic.cl/)

## 📦 Estructura del proyecto

```
tralkancomic/
│
├── frontend/       # Aplicación en React + Vite + TypeScript
│
├── backend/        # Servidor Express para envío de correos
│   ├── templates/  # Plantillas HTML para correos
```

---

## ⚙️ Tecnologías principales

- **Frontend**: React + Vite + TypeScript + TailwindCSS
- **Backend**: Node.js + Express + Nodemailer
- **Captcha**: Google reCAPTCHA v3
- **Protección**: Honeypot + Rate limiting + Validación de token captcha

---

## 🚀 Instalación local

### 1. Clonar el proyecto

```bash
git clone https://github.com/usuario/tralkancomic.git
cd tralkancomic
```

### 2. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend (Express)

```bash
cd ../backend
npm install
node server.js
```

---

## 💌 Funcionalidades del formulario de contacto

- Validación reCAPTCHA v3
- Envío de email al equipo del cómic
- Respuesta automática al usuario
- Prevención de spam con honeypot y rate limiting

---

## 🧪 Seguridad implementada

- ✅ Google reCAPTCHA v3 (`score >= 0.5`)
- ✅ Honeypot (`trap` field)
- ✅ Rate limiting (5 envíos por minuto/IP)
- ✅ Sanitización básica de entrada (servidor)

---

## 📁 Plantillas de correo

Ubicadas en `/backend/templates/`:

- `contacto.html`: email que recibe el equipo
- `respuesta.html`: email automático al visitante

Variables reemplazables: `{{name}}`, `{{email}}`, `{{message}}`

---

## 🛠 Mejoras

- [ ] Guardar los mensajes en una base de datos
- [ ] Agregar campos adicionales (teléfono, asunto)
- [ ] Panel administrativo privado para visualizar mensajes

---

## 👥 Créditos

- ✍️ Texto y Narración: Javier Millapán
- 🎨 Ilustración: Víctor Moraga y David Muñoz
- 💻 Desarrollo web: Paola Juarez

---

## 📬 Contacto

¿Tienes dudas o comentarios? Contáctanos en nuestro formulario de contacto o siguenos a través de Instragram en [@tralkan.comic](https://www.instagram.com/tralkan.comic/)

---

## 🖼️ Licencia del contenido visual

Todas las ilustraciones, logotipos y material gráfico presentes en este repositorio son propiedad de los autores de **Tralkán Comic**.

**Queda estrictamente prohibida su reproducción, modificación o redistribución sin autorización expresa.**

El código fuente del sitio puede estar bajo una licencia de código abierto, pero el contenido visual está sujeto a **uso privado no comercial**.

© Tralkán Comic. Todos los derechos reservados.
