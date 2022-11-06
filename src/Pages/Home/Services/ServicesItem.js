import React from "react";
import { Link } from "react-router-dom";

const ServicesItem = ({ service }) => {
  const { img, _id, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-full">
        <img src={img} alt="Shoes" className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl font-semibold text-orange-500">Price ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
