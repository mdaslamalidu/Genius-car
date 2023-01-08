import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ServicesItem from "./ServicesItem";

const Secvices = () => {
  const [services, setSurvices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [isLess, setIsLess] = useState(true);
  const [search, setSearch] = useState("");
  console.log(search);
  const searchRef = useRef();

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&order=${
        isAsc ? "asc" : "dsc"
      }&less=${isLess ? "less" : "greater"}`
    )
      .then((res) => res.json())
      .then((data) => setSurvices(data));
  }, [isAsc, isLess, search]);
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
        <input
          ref={searchRef}
          className="input input-sm input-bordered mr-2"
          type="text"
        />
        <button onClick={handleSearch}>search</button>
        <select
          className="uppercase border rounded py-2 bg-slate-400 text-white px-3 mt-3"
          onClick={(e) => {
            if (e.target.value === "ascending") {
              setIsAsc(true);
            } else {
              setIsAsc(false);
            }
          }}
        >
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
        <select
          className="uppercase border rounded py-2 bg-slate-400 text-white px-3 mt-3"
          onClick={(e) => {
            if (e.target.value === "0") {
              setIsLess(true);
            } else {
              setIsLess(false);
            }
          }}
        >
          <option value="0">0 to 100</option>
          <option value="100">100 to Up</option>
        </select>
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
