import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Slide from "react-reveal/Slide";
import news3 from "../../../Assets/news3.jpeg";
import news4 from "../../../Assets/news4.jpeg";
import news5 from "../../../Assets/news5.jpeg";
import news6 from "../../../Assets/news6.jpeg";
import news1 from "../../../Assets/topstories1.jpg";

const Stories = () => {
  return (
    <>
      <Navbar />
      <section id="stories">
        <section className="c-display md:py-16 py-8">
          <div className=" ">
            <Slide bottom cascade>
              <header className=" text-center">
                <h1 className="title">Top Stories</h1>
                <p className="text-gray-500 capitalize pt-2">
                  Stories are born
                  <br /> the latest press releases from sidur tatto new and
                  Existing Press Releases
                </p>
              </header>
            </Slide>
          </div>
          Copied!
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap">
              <div class="lg:w-2/3 mx-auto">
                <Slide bottom cascade>
                  <div class="flex flex-wrap ">
                    <iframe
                      className="aspect-video object-cover h-full w-full rounded"
                      src="https://www.youtube.com/embed/DjgcX_64VO0"
                      title="দেশে বাড়ছে ট্যাটু করার প্রবণতা!"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Slide>
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <Slide left cascade>
                    <div class="md:col-span-1 col-span-2">
                      <div class="group">
                        <div class="h-[316px] overflow-hidden relative c-shadow  overflow-hidden rounded">
                          <img
                            src={news1}
                            className="w-fit rounded group-hover:translate-y-[-100%] group-hover:mt-[316px]  ease-in-out  duration-[3s]"
                            alt=""
                          />
                          <div className=" absolute bottom-[-150px] h-[145px]  group-hover:translate-y-[-100%]  z-50 ease-in-out  duration-1000 bg-gradient-to-t from-[#000000] to-[#ff014d00] w-full p-5 flex gap-3 flex-col">
                            <h2 class="text-xl text-gray-200 font-medium title-font">
                              Shooting Stars fixie paleoe fixie paleo
                              lumbersexual.
                            </h2>
                            <a class="text-[#e8dc36] inline-flex items-center">
                              Read More
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide right cascade>
                    <div class="md:col-span-1 col-span-2">
                      <div class="group">
                        <div class="screen h-[316px] relative c-shadow  overflow-hidden rounded">
                          <img
                            src={news3}
                            className="w-fit rounded group-hover:translate-y-[-100%] group-hover:mt-[316px]  ease-in-out  duration-[3s]"
                            alt=""
                          />
                          <div className=" absolute bottom-[-150px] h-[145px]  group-hover:translate-y-[-100%]  z-50 ease-in-out  duration-1000 bg-gradient-to-t rounded-b from-[#000000] to-[#ff014d00] w-full p-5 flex gap-3 flex-col">
                            <h2 class="text-xl text-gray-200 font-medium title-font">
                              Shooting Stars fixie paleoe fixie paleo
                              lumbersexual.
                            </h2>
                            <a class="text-[#e8dc36] inline-flex items-center">
                              Read More
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide right cascade>
                    <div class="md:col-span-1 col-span-2">
                      <div class="group">
                        <div class="screen h-[316px] relative c-shadow  overflow-hidden rounded">
                          <img
                            src={news4}
                            className="w-fit rounded group-hover:translate-y-[-100%] group-hover:mt-[316px]  ease-in-out  duration-[3s]"
                            alt=""
                          />
                          <div className=" absolute bottom-[-150px] h-[145px]  group-hover:translate-y-[-100%]  z-50 ease-in-out  duration-1000 bg-gradient-to-t rounded-b from-[#000000] to-[#ff014d00] w-full p-5 flex gap-3 flex-col">
                            <h2 class="text-xl text-gray-200 font-medium title-font">
                              Shooting Stars fixie paleoe fixie paleo
                              lumbersexual.
                            </h2>
                            <a class="text-[#e8dc36] inline-flex items-center">
                              Read More
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide right cascade>
                    <div class="md:col-span-1 col-span-2">
                      <div class="group">
                        <div class="screen h-[316px] relative c-shadow  overflow-hidden rounded">
                          <img
                            src={news5}
                            className="w-fit rounded group-hover:translate-y-[-100%] group-hover:mt-[316px]  ease-in-out  duration-[3s]"
                            alt=""
                          />
                          <div className=" absolute bottom-[-150px] h-[145px]  group-hover:translate-y-[-100%]  z-50 ease-in-out  duration-1000 bg-gradient-to-t rounded-b from-[#000000] to-[#ff014d00] w-full p-5 flex gap-3 flex-col">
                            <h2 class="text-xl text-gray-200 font-medium title-font">
                              Shooting Stars fixie paleoe fixie paleo
                              lumbersexual.
                            </h2>
                            <a class="text-[#e8dc36] inline-flex items-center">
                              Read More
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide right cascade>
                    <div class="md:col-span-1 col-span-2">
                      <div class="group">
                        <div class="screen h-[316px] relative c-shadow  overflow-hidden rounded">
                          <img
                            src={news6}
                            className="w-fit rounded group-hover:translate-y-[-100%] group-hover:mt-[316px]  ease-in-out  duration-[3s]"
                            alt=""
                          />
                          <div className=" absolute bottom-[-150px] h-[145px]  group-hover:translate-y-[-100%]  z-50 ease-in-out  duration-1000 bg-gradient-to-t rounded-b from-[#000000] to-[#ff014d00] w-full p-5 flex gap-3 flex-col">
                            <h2 class="text-xl text-gray-200 font-medium title-font">
                              Shooting Stars fixie paleoe fixie paleo
                              lumbersexual.
                            </h2>
                            <a class="text-[#e8dc36] inline-flex items-center">
                              Read More
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Stories;
