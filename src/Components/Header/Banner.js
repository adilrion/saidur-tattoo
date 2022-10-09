import React, { useEffect, useRef } from "react";

import "./Header.css";
import banner1 from "../../Assets/banner1.jpg";
import banner2 from "../../Assets/banner2.jpeg";
import banner3 from "../../Assets/banner3.jpg";
import video from "../../Assets/bannerVideo.mp4";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";

const sl = [
  {
    title: "FIND THE RIGHT ARTIST",
    msg: "Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea.",
    img: banner1,
  },
  {
    title: "YOUR NEXT TATTOO",
    msg: "Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea.",
    img: banner2,
  },
  {
    title: "FIND THE RIGHT ARTIST FOR YOUR NEXT TATTOO",
    msg: "Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea.",
    img: banner3,
  },
];

const Header = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <div className="relative ">
          <div className="banner "></div>
          <video
            style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
            playsInline
            loop
            muted
            alt="All the devices"
            src={video}
            ref={videoEl}
            className="aspect-video "
          />

          <div className="absolute top-2/4 left-2/4 flex justify-center flex-col -translate-y-2/4 -translate-x-2/4 text-white text-center">
         
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
          FIND THE RIGHT ARTIST FOR YOUR NEXT TATTOO
                </h1>
           
          <p className="text-gray-300 hidden md:block">
          Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea
                </p>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Header;
