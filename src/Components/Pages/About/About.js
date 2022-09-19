import React from "react";
import about from '../../../Assets/about.png'

const About = () => {
  return (
    <section id="about" className="c-display">
      <div className="grid grid-cols-12 gap-5 md:pt-16 pt-8">
        <div className="col-span-12 lg:col-span-4 md:col-span-5 ">
          <img
            src={about}
            alt=""
            className="h-full aspect-square object-center object-fill md:max-h-[500px] w-full"
          />
        </div>
        <div className="col-span-12 lg:col-span-8 md:col-span-7 w-full h-full flex flex-col justify-center gap-2 md:gap-3 lg:gap-5">
          <h1 className="title ">About Us</h1>
          <p className="text-gray-200">
          HI, I’m SAIDUR RAHMAN VUIYAN. I’m the founder of “SAIDUR TATTOO STUDIO”. I’m tattooing since 2000. We have “Dhaka Tattoo Studio”, “Piercing BD” and “BD Tattoo Remove Centre”.<br/> Tattoos, for me, are like a timeline of my life. I could look at a certain tattoo, and it reminds of me of a
certain time in my life and why I got that tattoo.
          </p>
          <p className="text-gray-500">
          In the tattoo business, being a good tattoo artist calls for a lot of skill and commitment to giving utterly
the best kind of art which can rival others.
Tattoo artists must have a clear and deep understanding not to mention an appreciation of art. That is
the reason they are called artists. You especially need to have a sound and creative mind and couple this
with putting down your sketches on paper trying to make it as unique and appealing as possible.
Professional tattooing entails attention to detail, and a great artist keeps into account all the details that
are especially in the art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
