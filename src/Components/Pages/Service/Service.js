import React from "react";
import Slide from 'react-reveal/Slide';
import earSwelling from "../../../Assets/earSwelling.jpg";
import LaserTreatment from "../../../Assets/Laser treatment.jpg";
import Laser from "../../../Assets/Laser.jpg";
import tattoo from "../../../Assets/tatto.jpg";
import "./Service.css";

const Service = () => {
  return (
    <section id="service" className="c-display">
      <div className=" md:pt-16 pt-8">
      <Slide bottom >
        <header className=" text-center">
          <h1 className="title">What We Do</h1>
          <p className="text-gray-500">
          We do TATTOO, PEIRCING, TATTOO REMOVE.
          </p>
          </header>
        </Slide>

        <div className="grid md:grid-cols-2 items-center gap-5 py-10">
        <Slide left >
          <div className="col-span-1 grid grid-cols-12 gap-5  c-bg rounded overflow-hidden">
            <div className="col-span-8 text-end my-auto">
              <h1 className="uppercase text-gray-200 text-2xl font-space font-semibold">
              TATTOO
              </h1>
              <p className="text-gray-500">
              Our bodies were printed as blank pages to be filled with the ink of our hearts.
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From 100 BDT</p>
            </div>
            <div className="col-span-4 ">
              <img
                className="w-[200px] h-[200px] aspect-square object-cover object-center"
                src={tattoo}
                alt=""
              />
            </div>
          </div>
          </Slide>
          <Slide right >
          <div className="col-span-1 grid grid-cols-12 gap-5  c-bg rounded overflow-hidden">
            <div className="col-span-4 ">
              <img
                className="w-[200px] h-[200px] aspect-square object-cover object-center"
                src={earSwelling}
                alt=""
              />
            </div>
            <div className="col-span-8 text-start my-auto">
              <h1 className="uppercase text-gray-200 text-2xl font-space font-semibold">
              PEIRCING
              </h1>
              <p className="text-gray-500">
              Piercings have a power and magic all their own. They decorate the body, but also enhance the soul
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From 100 BDT</p>
            </div>
            </div>
          </Slide>
          <Slide left >
          <div className="col-span-1 grid grid-cols-12 gap-5  c-bg rounded overflow-hidden">
            <div className="col-span-8 text-end my-auto">
              <h1 className="uppercase text-gray-200 text-2xl font-space font-semibold">
              TATTOO REMOVE
              </h1>
              <p className="text-gray-500">
              Erase the past by the tattoo removal laser treatment
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From 100 BDT</p>
            </div>
            <div className="col-span-4 ">
              <img
                className="w-[200px] h-[200px] aspect-square object-cover object-center"
                src={LaserTreatment}
                alt=""
              />
            </div>
            </div>
          </Slide>
          <Slide right >
          <div className="col-span-1 grid grid-cols-12 gap-5  c-bg rounded overflow-hidden">
            <div className="col-span-4 ">
              <img
                className="w-[200px] h-[200px] aspect-square object-cover object-center"
                src={Laser}
                alt=""
              />
            </div>
            <div className="col-span-8 text-start my-auto">
              <h1 className="uppercase text-gray-200 text-2xl font-space font-semibold">
                Laser <span className="text-[8px] text-gray-500 capitalize">Coming soon</span>
              </h1>
              <p className="text-gray-500">
              Not available at this moment Coming soon
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From 000 BDT</p>
            </div>
            </div>
            </Slide>
        </div>
      </div>
    </section>
  );
};

export default Service;
