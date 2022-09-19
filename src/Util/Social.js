import React from "react";
import "./Social.css";
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
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finkmeofficial.com%2F&amp;t=Modern"
              class="dpsp-network-btn dpsp-facebook dpsp-first dpsp-has-label"
              target="_blank"
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

          <li class="bg-[#00abf0] s-icon group ">
            <a
              rel="nofollow noopener"
              href="https://twitter.com/intent/tweet?text=Modern&amp;url=https%3A%2F%2Finkmeofficial.com%2F"
              class="dpsp-network-btn dpsp-twitter dpsp-has-label"
              target="_blank"
              aria-label="Share on Twitter"
              title="Share on Twitter"
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
                    viewBox="0 0 30 32"
                    className="group-hover:scale-[1.3] transition  ease-in-out duration-300"
                  >
                    <path d="M28.928 7.296q-1.184 1.728-2.88 2.976 0 0.256 0 0.736 0 2.336-0.672 4.64t-2.048 4.448-3.296 3.744-4.608 2.624-5.792 0.96q-4.832 0-8.832-2.592 0.608 0.064 1.376 0.064 4.032 0 7.168-2.464-1.888-0.032-3.36-1.152t-2.048-2.848q0.608 0.096 1.088 0.096 0.768 0 1.536-0.192-2.016-0.416-3.328-1.984t-1.312-3.68v-0.064q1.216 0.672 2.624 0.736-1.184-0.8-1.888-2.048t-0.704-2.752q0-1.568 0.8-2.912 2.176 2.656 5.248 4.256t6.656 1.76q-0.16-0.672-0.16-1.312 0-2.4 1.696-4.064t4.064-1.696q2.528 0 4.224 1.824 1.952-0.384 3.68-1.408-0.672 2.048-2.56 3.2 1.664-0.192 3.328-0.896z"></path>
                  </svg>
                </span>
              </span>
            </a>
            {/* <span class="dpsp-network-label">Twitter</span> */}
          </li>

          <li class="bg-[#c92228] s-icon group">
            <span class="dpsp-network-icon ">
              <span class="dpsp-network-icon-inner">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  viewBox="0 0 23 32"
                  className="group-hover:scale-[1.3] transition  ease-in-out duration-300"
                >
                  <path d="M0 10.656q0-1.92 0.672-3.616t1.856-2.976 2.72-2.208 3.296-1.408 3.616-0.448q2.816 0 5.248 1.184t3.936 3.456 1.504 5.12q0 1.728-0.32 3.36t-1.088 3.168-1.792 2.656-2.56 1.856-3.392 0.672q-1.216 0-2.4-0.576t-1.728-1.568q-0.16 0.704-0.48 2.016t-0.448 1.696-0.352 1.28-0.48 1.248-0.544 1.12-0.832 1.408-1.12 1.536l-0.224 0.096-0.16-0.192q-0.288-2.816-0.288-3.36 0-1.632 0.384-3.68t1.184-5.152 0.928-3.616q-0.576-1.152-0.576-3.008 0-1.504 0.928-2.784t2.368-1.312q1.088 0 1.696 0.736t0.608 1.824q0 1.184-0.768 3.392t-0.8 3.36q0 1.12 0.8 1.856t1.952 0.736q0.992 0 1.824-0.448t1.408-1.216 0.992-1.696 0.672-1.952 0.352-1.984 0.128-1.792q0-3.072-1.952-4.8t-5.12-1.728q-3.552 0-5.952 2.304t-2.4 5.856q0 0.8 0.224 1.536t0.48 1.152 0.48 0.832 0.224 0.544q0 0.48-0.256 1.28t-0.672 0.8q-0.032 0-0.288-0.032-0.928-0.288-1.632-0.992t-1.088-1.696-0.576-1.92-0.192-1.92z"></path>
                </svg>
              </span>
            </span>

            {/* <span class="dpsp-network-label">Pinterest</span> */}
          </li>

          <li class="bg-[#0077b5] s-icon group">
            <a
              rel="nofollow noopener"
              href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Finkmeofficial.com%2F&amp;title=Modern&amp;summary=Services%20Tattoo%20Piercing%20Laser%20Offers%20News%20%26amp%3B%20Events%20Testimonials%20Contact%20me&amp;mini=true"
              class=""
              target="_blank"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
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
                    viewBox="0 0 27 32"
                    className="group-hover:scale-[1.3] transition  ease-in-out duration-300"
                  >
                    <path d="M6.24 11.168v17.696h-5.888v-17.696h5.888zM6.624 5.696q0 1.312-0.928 2.176t-2.4 0.864h-0.032q-1.472 0-2.368-0.864t-0.896-2.176 0.928-2.176 2.4-0.864 2.368 0.864 0.928 2.176zM27.424 18.72v10.144h-5.856v-9.472q0-1.888-0.736-2.944t-2.272-1.056q-1.12 0-1.856 0.608t-1.152 1.536q-0.192 0.544-0.192 1.44v9.888h-5.888q0.032-7.136 0.032-11.552t0-5.28l-0.032-0.864h5.888v2.56h-0.032q0.352-0.576 0.736-0.992t0.992-0.928 1.568-0.768 2.048-0.288q3.040 0 4.896 2.016t1.856 5.952z"></path>
                  </svg>
                </span>
              </span>
            </a>
            {/* <span class="dpsp-network-label">LinkedIn</span> */}
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
