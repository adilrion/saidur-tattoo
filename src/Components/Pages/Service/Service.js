import React from "react";
import earSwelling from "../../../Assets/earSwelling.jpg";
import LaserTreatment from "../../../Assets/Laser treatment.jpg";
import Laser from "../../../Assets/Laser.jpg";
import tattoo from "../../../Assets/tatto.jpg";
import Tattoo from "../Tattoo/Tattoo";
import "./Service.css";

const Service = () => {
  return (
    <section id="service" className="c-display">
      <div className=" md:pt-16 pt-8">
        <header className=" text-center">
          <h1 className="title">What We Do</h1>
          <p className="text-gray-500">
            We run a men’s barbershop in its best traditions. <br /> Our guys
            will help you look stylish and confident, and most importantly,
            manly
          </p>
        </header>

        <div className="grid md:grid-cols-2 items-center gap-5 py-10">
          <div className="col-span-1 grid grid-cols-12 gap-5  c-bg rounded overflow-hidden">
            <div className="col-span-8 text-end my-auto">
              <h1 className="uppercase text-gray-200 text-2xl font-space font-semibold">
                tattoo
              </h1>
              <p className="text-gray-500">
                For premium result, at our barbershop we combine modern technics
                with traditional ones
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From: 100 BDT</p>
            </div>
            <div className="col-span-4 ">
              <img
                className="w-[200px] h-[200px] aspect-square object-cover object-center"
                src={tattoo}
                alt=""
              />
            </div>
          </div>
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
                Ear Swelling
              </h1>
              <p className="text-gray-500">
                For premium result, at our barbershop we combine modern technics
                with traditional ones
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From: 100 BDT</p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-12 gap-5  c-bg rounded overflow-hidden">
            <div className="col-span-8 text-end my-auto">
              <h1 className="uppercase text-gray-200 text-2xl font-space font-semibold">
                Laser Treatment
              </h1>
              <p className="text-gray-500">
                For premium result, at our barbershop we combine modern technics
                with traditional ones
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From: 100 BDT</p>
            </div>
            <div className="col-span-4 ">
              <img
                className="w-[200px] h-[200px] aspect-square object-cover object-center"
                src={LaserTreatment}
                alt=""
              />
            </div>
          </div>
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
                Laser
              </h1>
              <p className="text-gray-500">
                For premium result, at our barbershop we combine modern technics
                with traditional ones
              </p>
              <p className="text-sm text-[#e8dc36] pt-1">From: 100 BDT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
