import React from 'react';
import videoSource from '../assets/video.mp4'; // Adjust the path according to your project structure
import './VideoSection.css'


function VideoSection() {
  return (
    <section className="main-slider main-slider-one" id="index">
      <div className="overlay"></div>
      <video
        autoPlay
        playsInline
        loop
        muted
        className="container-video video-background"
        style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoSection;



// import React from 'react';
// import videoSource from '../assets/video.mp4'; // Adjust the path according to your project structure

// function VideoSection() {
//   return (
//     <section className="main-slider main-slider-one" id="index">
//       <div className="overlay"></div>
//       <video
//         autoPlay
//         playsInline
//         loop
//         muted
//         className="container-video video-background"
//       >
//         <source src={videoSource} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </section>
//   );
// }

// export default VideoSection;
