import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import Slide from "react-reveal/Slide";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [massage, setMassage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cs5i1o6",
        "template_wee22ub",
        form.current,
        "9b7oi8-Yjt2GAeazI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMassage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="pt-10">
      <Slide bottom cascade>
        <div class="">
          <div class="relative w-full flex items-center">
            <iframe
              className="w-[100%] h-[900px]  -z-10"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Dhaka%20Tattoo%20Studio&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <div className="px-4 md:w-[1000px] mx-auto md:px-8 py-5 mail-card absolute top-2/4  left-2/4 -translate-x-2/4  -translate-y-2/4">
              {" "}
              <div>
                <h1 className="text-gray-50 text-2xl mb-5  border-b-2 w-fit border-[#e8dc36]">
                  Contact Us
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="col-span-1 my-[15px]">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="relative z-0 w-full group ">
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="block py-3.5 px-0 w-full text-md text-gray-700 bg-transparent border-0 border-b-2 border-gray-500 appearance-none     focus:outline-none focus:ring-0 focus:border-[#e8dc36] peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        htmlFor="user_name"
                        className="absolute text-xl font-medium text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e8dc36]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative z-0 my-6 w-full group">
                      <input
                        type="email"
                        name="user_email"
                        className="block py-3.5 px-0 w-full text-md text-gray-700 bg-transparent border-0 border-b-2 border-gray-500 appearance-none     focus:outline-none focus:ring-0 focus:border-[#e8dc36] peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        htmlFor="user_email"
                        className="absolute text-xl font-medium text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e8dc36]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <textarea
                        rows="5"
                        type="text"
                        name="message"
                        className="block py-4 px-0 w-full text-md text-gray-700 bg-transparent border-0 border-b-2  appearance-none border-gray-500 focus:outline-none focus:ring-0 focus:border-[#e8dc36] peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        htmlFor="message"
                        className="absolute text-xl font-medium text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e8dc36]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Type Your Massage..
                      </label>
                    </div>
                    {massage ? (
                      <div class="px-8 py-6 massage-card text-white flex justify-between rounded">
                        <div class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 mr-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          <p>Congratulation! Email send was successful!</p>
                        </div>
                        <button
                          onClick={() => setMassage(false)}
                          class="text-green-100 hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="text-white bg-[#e8dc36]  focus:ring-4 focus:ring-[#e8dc36] font-medium text-md w-full md:w-fit px-10 py-2.5 text-center  gap-1 inline-flex justify-center"
                      >
                        Send <RiSendPlaneLine />
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Contact;
