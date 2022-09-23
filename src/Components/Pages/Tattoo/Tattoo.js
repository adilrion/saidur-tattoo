import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Tattoo.css";
import Slide from 'react-reveal/Slide'

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
import { Link } from "react-router-dom";

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
     <Slide bottom >
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
        </Slide>
      </div>
      <div className="mt-5">
            <Link
              to="/gallery"
              class="text-[#e8dc36] opacity-[50%] inline-flex items-center justify-end w-full"
            >
             View More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
    </section>
  );
};

export default Tattoo;
