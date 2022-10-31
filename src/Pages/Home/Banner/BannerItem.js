import React from "react";

const BannerItem = ({ slider }) => {
  const { image, id, prev, next } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img w-full">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-5xl font-bold text-white block">
          Affordable
          <br />
          price for car
          <br />
          survicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <p className="text-lg text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          debitis, accusamus voluptates.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/3 w-2/5">
        <button className="btn btn-warning mr-4">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
