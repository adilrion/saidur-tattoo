import React from "react";
import "./Social.css";
import { FiInstagram } from "react-icons/fi";
const Social = () => {
  return (
    <div>
      <aside
        id=""
        aria-label="social sharing sidebar"
        class="w-fit"
        data-trigger-scroll="0"
      >
        <ul class="flex flex-col gap-2">
          <li class="bg-[#3a579a] s-icon group">
            <a
              rel="nofollow noopener"
              href="https://www.facebook.com/dhakatattooshop"
              target="_blank"
              class="dpsp-network-btn dpsp-facebook dpsp-first dpsp-has-label"
              aria-label="Share on Facebook"
              title="Share on Facebook"
            >
              {" "}
              <span class="dpsp-network-icon ">
                <span class="">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    viewBox="0 0 18 32"
                    className="group-hover:scale-[1.3] transition  ease-in-out duration-300"
                  >
                    <path d="M17.12 0.224v4.704h-2.784q-1.536 0-2.080 0.64t-0.544 1.92v3.392h5.248l-0.704 5.28h-4.544v13.568h-5.472v-13.568h-4.544v-5.28h4.544v-3.904q0-3.328 1.856-5.152t4.96-1.824q2.624 0 4.064 0.224z"></path>
                  </svg>
                </span>
              </span>
            </a>
            {/* <span class="hidden">Facebook</span> */}
          </li>

          <li class="bg-[#c92228] s-icon group">
            <a
              href="https://instagram.com/dhaka_tattoo_studio?igshid=YmMyMTA2M2Y="
              target="_blank"
              class="dpsp-network-icon "
            >
              <span class="dpsp-network-icon-inner">
                <FiInstagram className="w-[32px] h-[32px] group-hover:scale-[1.3] transition  ease-in-out duration-300 text-white"/>
              </span>
            </a>

            {/* <span class="dpsp-network-label">Pinterest</span> */}
          </li>

          <li class="bg-[#27ae60] s-icon group">
            <a
              rel="nofollow noopener"
              href="mailto:?subject=https%3A%2F%2Finkmeofficial.com%2F&amp;body=Modern"
              class=""
              target="_blank"
              aria-label="Send over email"
              title="Send over email"
            >
              {" "}
              <span class="dpsp-network-icon ">
                <span class="dpsp-network-icon-inner">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    viewBox="0 0 28 32"
                    className="group-hover:scale-[1.3] transition  ease-in-out duration-300"
                  >
                    <path d="M18.56 17.408l8.256 8.544h-25.248l8.288-8.448 4.32 4.064zM2.016 6.048h24.32l-12.16 11.584zM20.128 15.936l8.224-7.744v16.256zM0 24.448v-16.256l8.288 7.776z"></path>
                  </svg>
                </span>
              </span>
            </a>
            {/* <span class="dpsp-network-label">Email</span> */}
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Social;
