import { useState } from "react";

import "./letter.css";

export default function OpenLetterComponent() {
  const messages = {
    default: "Will you be my valentine?",
    bad: ["Are you sure????", "Why do you keep pressing no???", "What did I do??"],
    good: "yay. I love youuuu ❤️",
  };

  const [message, setMessage] = useState<string>(messages.default);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleYes = () => {
    setMessage(messages.good);
    setVideoSrc("happy.mp4");
    setShowVideo(true);
  };

  const handleNo = () => {
    const randomIndex = Math.floor(Math.random() * messages.bad.length);
    setMessage(messages.bad[randomIndex]);
    setVideoSrc("mad.mp4");
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setMessage(messages.default);
    setShowVideo(false);
    setVideoSrc(null);
  };

  return (
    <div className="letter">
      {showVideo && videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
          className="capy-video"
          style={{ backgroundColor: 'transparent' }}
        />
      ) : (
        <img id="capy" src="capy.png" alt="capy" />
      )}

      <h1>{message}</h1>

      <div className="buttons">
        <button id="yes" onClick={handleYes} disabled={showVideo}>
          Yes
        </button>
        <button id="no" onClick={handleNo} disabled={showVideo}>
          No
        </button>
      </div>
    </div>
  );
}
