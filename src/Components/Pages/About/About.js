import React from "react";

const About = () => {
  return (
    <section className="display">
      <div className="grid grid-cols-12 gap-5 md:pt-12 pt-8">
        <div className="col-span-12 lg:col-span-4 md:col-span-5 ">
          <img
            src="https://images.unsplash.com/photo-1575930005384-8236e807c565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className=" h-fit md:max-h-[500px] w-full"
          />
        </div>
        <div className="col-span-12 lg:col-span-8 md:col-span-7 w-full h-full flex flex-col justify-center gap-2 md:gap-3 lg:gap-5">
          <h1 className="title ">About Us</h1>
          <p className="text-gray-200">
            Our barbershop is the territory created purely for males who
            appreciate premium quality, time and flawless look.
          </p>
          <p className="text-gray-500">
            Our services spectrum encompasses many techniques and procedures –
            from straight razor shaving and hairstyling to beard care and
            eyebrow grooming. At our place, you have a chance to have your
            precious hair taken care of, sipping premium whisky and listening to
            nice music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
