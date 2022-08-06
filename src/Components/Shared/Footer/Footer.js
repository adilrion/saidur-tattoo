import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="c-bg">
      <footer class="py-5   rounded-lg shadow display flex flex-col">
        <div class="sm:flex sm:items-center sm:justify-between w-full border-b border-gray-700 md:pb-10 pb-3">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <Link
              to="home"
              className="text-gray-500 text-3xl font-medium uppercase"
            >
              Lakshmi
            </Link>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div class="block text-sm md:pt-10 pt-7 text-gray-500 sm:text-center ">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Lakshmi™
          </a>
          . All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
