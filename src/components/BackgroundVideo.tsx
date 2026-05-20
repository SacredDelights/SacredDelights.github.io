import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/poster.jpg"
          className="absolute inset-0 min-w-full min-h-full object-cover -z-10"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="font font-Eyesome text-[clamp(2.7rem,9vw,12rem)] text-white text-center">
            Welcome to Sacred Delights!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
