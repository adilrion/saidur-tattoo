import React from "react";
import "./Gallery.css";
const gallery = [
  {
    title: "a",
    img: "https://images.unsplash.com/photo-1655069482983-d87066eefd01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "b",
    img: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "c",
    img: "https://images.unsplash.com/photo-1564426622559-5af68da63b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "d",
    img: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "e",
    img: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "f",
    img: "https://images.unsplash.com/photo-1562379825-415aea84ebcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "g",
    img: "https://images.unsplash.com/photo-1562379825-415aea84ebcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "h",
    img: "https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Gallery = () => {
  return (
    <div className="c-display md:pt-8 pt-8">
      <div>
        <div>
          <h1 className="text-gray-50 text-2xl mb-5  border-b-2 w-fit border-[#e8dc36]">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-4 grid-flow-row-dense gap-2 relative ">
          {gallery?.map((data, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "col-span-4 md:col-span-1"
                    : "col-span-4 md:col-span-2"
                } w-full h-full max-h-[450px] art-section  bg-transparent`}
              >
                <img
                  src={data?.img}
                  alt="#"
                  className="w-full h-full object-center object-cover aspect-video  art-images "
                />

                <div class="">
                  <p class="absolute bottom-[5px] left-2/4 -translate-x-2/4 w-full text-center  text-md text">
                    {data.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
