import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className=" bg-teal-900 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300 ease-in-out">
        {title}
      </button>
      
      
    </div>
  );
};

export default Button;