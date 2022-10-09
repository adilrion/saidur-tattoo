import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import Slide from 'react-reveal/Slide';
import "./Contact.css";

const Contact = () => {

  const form = useRef();
  const [massage, setMassage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs5i1o6', 'template_wee22ub', form.current, '9b7oi8-Yjt2GAeazI')
      .then((result) => {
          console.log(result.text);
          setMassage(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section
      id="contact"
      className="px-4 max-w-screen-xl mx-auto md:px-8 md:py-16 py-8"
    >
      <Slide bottom cascade>
      <div className="">
        <div>
          <h1 className="text-gray-50 text-2xl mb-5  border-b-2 w-fit border-[#e8dc36]">
            Contact Us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="col-span-1 flex flex-col gap-3">
            <div className="c-address">
              <p className="c-address-icon c-bg">
                <MdOutlineLocationOn />
              </p>
              <div className="c-address-details">
                <h3>Address</h3>
                <p>
                  Box 564, Disneyland,
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="c-address">
              <p className="c-address-icon c-bg">
                <ImPhone />
              </p>
              <div className="c-address-details">
                <h3>Phone</h3>
                <p>+88 0534684646</p>
                <p>+00 8893513546</p>
              </div>
            </div>
            <div className="c-address">
              <p className="c-address-icon c-bg">
                <BsEnvelope />
              </p>
              <div className="c-address-details">
                <h3>Email</h3>
                <p>ejildsfeee@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 my-[15px]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative z-0 w-full group ">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="block py-3.5 px-0 w-full text-md text-[#f2f2f2ee] bg-transparent border-0 border-b-2 border-gray-500 appearance-none     focus:outline-none focus:ring-0 focus:border-[#e8dc36] peer"
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
                  className="block py-3.5 px-0 w-full text-md text-[#f2f2f2ee] bg-transparent border-0 border-b-2 border-gray-500 appearance-none     focus:outline-none focus:ring-0 focus:border-[#e8dc36] peer"
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
                  className="block py-4 px-0 w-full text-md text-[#f2f2f2ee] bg-transparent border-0 border-b-2  appearance-none border-gray-500 focus:outline-none focus:ring-0 focus:border-[#e8dc36] peer"
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
              <button
                type="submit"
                className="text-white bg-[#e8dc36]  focus:ring-4 focus:ring-[#e8dc36] font-medium text-md w-full md:w-fit px-10 py-2.5 text-center  gap-1 inline-flex justify-center"
              >
                Send <RiSendPlaneLine />
              </button>
            </form>
          </div>
        </div>
        </div>
        </Slide>
    </section>
  );
};

export default Contact;
