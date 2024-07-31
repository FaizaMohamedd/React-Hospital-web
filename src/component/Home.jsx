import React from "react";
import Button from "../layouts/Button";
import GPImage from "../assets/img/GP.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center lg:px-32 px-6 bg-cover"
      style={{
        backgroundImage: `url(${GPImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-teal-700 bg-opacity-50"></div>
      <div className="relative  space-y-5 mt-10 text-white">
      <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>
        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;