import { memo, useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ title, description, ghub, url, videoSrc }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleEnter = () => {
    const v = videoRef.current;
    if (v) v.play().catch(() => { });
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };


  return (
    <div className="project">
      <div className="aside">
        <div className="content">
          <div className="header">
            <h3>{title}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${title}`} className="project-icon" title={`${title} Website Link`}>
              <FaExternalLinkAlt />
            </a>
            <a href={ghub} target="_blank" rel="noopener noreferrer" className="project-icon" title={`${title} GitHub Link`}>
              <FaGithub />
            </a>
          </div>
          <p>{description}</p>
        </div>
      </div>


      <div className="video-container"
        ref={containerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}>
          
        {inView &&
          <video
            ref={videoRef}
            poster={poster}
            src={videoSrc}
            preload="metadata"
            loop
            muted
            playsInline
            aria-hidden="true"
            width={300}
            height={180}
          />
        }
      </div>
    </div>
  );
};

export default memo(Project);
