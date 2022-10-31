import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem";

const Secvices = () => {
  const [services, setSurvices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSurvices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-lg font-bold text-orange-500">Survices</p>
        <h2 className="text-4xl font-bold">Our Survices Area</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          similique!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint, similique!
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7">
        {services.map((service) => (
          <ServicesItem key={service._id} service={service}></ServicesItem>
        ))}
      </div>
    </div>
  );
};

export default Secvices;
