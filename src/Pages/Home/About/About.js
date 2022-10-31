import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import part from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img
            src={part}
            className="absolute right-4 top-1/2 w-3/5 rounded-lg shadow-2xl border-8"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg text-orange-400 font-bold">About Us</p>
          <h1 className="text-5xl font-bold mt-2">
            We are qualified
            <br />& experience
            <br />
            In this field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-warning mt-6">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
