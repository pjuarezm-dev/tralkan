import { useParams, Link } from 'react-router-dom';

const VideoPage = () => {
  const { videoId } = useParams();
 
  const videoSrc = `/relato/${videoId}.mp4`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="max-w-4xl w-full p-4">  
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          autoPlay
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video> 
      </div>
    </div>
  );
};

export default VideoPage;
