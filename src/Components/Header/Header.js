import React from "react";
import "./Header.css";
import banner1 from '../../Assets/banner1.jpg'
import banner2 from '../../Assets/banner2.jpeg'
import banner3 from '../../Assets/banner3.jpg'
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
                className="aspect-video object-center object-cover h-[60vh] md:h-[80vh] w-full block "
              />
              <div className="absolute top-2/4 flex justify-center flex-col -translate-y-2/4 text-white text-center gap-y-5 px-4 max-w-screen-xl mx-auto  md:px-8">
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold ">
                  {data?.title}
                </h1>
                <p className="text-gray-300 px-5 md:px-16 lg:px-96">
                  {data?.msg}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Header;
