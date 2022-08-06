import React from "react";
import "./Header.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

const sl = [
  {
    title: "FIND THE RIGHT ARTIST",
    msg: "Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea.",
    img: "https://images.unsplash.com/photo-1475695752828-6d2b0a83cf8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80",
  },
  {
    title: "YOUR NEXT TATTOO",
    msg: "Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea.",
    img: "https://images.unsplash.com/photo-1475695395073-ec071eda8106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80",
  },
  {
    title: "FIND THE RIGHT ARTIST FOR YOUR NEXT TATTOO",
    msg: "Because getting a tattoo should be a great experience. We work with only the best tattoo studios, and we’ll connect you to the right artist for your idea.",
    img: "https://images.unsplash.com/photo-1482329033286-79a3d24413b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Header = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {sl?.map((data, index) => {
          return (
            <SwiperSlide className="relative ">
              <div className="banner "></div>
              <img
                src={data.img}
                alt=""
                className="aspect-video object-center object-cover h-[60vh] md:h-[70vh] w-full block "
              />
              <div className="absolute top-2/4 flex justify-center w-full  flex-col -translate-y-2/4 text-white text-center px-4 gap-y-5">
                <h1 className="text-2xl md:text-4xl font-medium ">
                  {data?.title}
                </h1>
                <p className="text-gray-300">{data?.msg}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Header;
