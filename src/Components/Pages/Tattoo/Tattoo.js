import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Tattoo.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../Assets/1.jpeg";
import img2 from "../../../Assets/2.jpeg";
import img3 from "../../../Assets/3.jpeg";
import img4 from "../../../Assets/4.jpeg";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

const works = [
  {
    title: "A",
    img: `${img1}`,
  },
  {
    title: "A",
    img: `${img2}`,
  },
  {
    title: "A",
    img: `${img3}`,
  },
  {
    title: "A",
    img: `${img4}`,
  },
];

const Tattoo = () => {
  return (
    <section id="tattoo" className="px-4 max-w-screen-xl mx-auto md:px-8">
      <div>
        <div className="">
          <div>
            <h1 className="text-gray-50 text-2xl mb-5  border-b-2 w-fit border-[#e8dc36]">
              Recent Works
            </h1>
          </div>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {works?.map((data, index) => {
                return (
                  <SwiperSlide className="relative">
                    <img
                      src={data.img}
                      alt=""
                      className="aspect-video object-center object-cover md:w-full min-w-[150px] h-[200px] md:h-[300px]  block "
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tattoo;
