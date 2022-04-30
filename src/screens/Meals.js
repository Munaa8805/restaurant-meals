import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Meals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <div>
        <h1>Meals</h1>
      </div>
    </>
  );
};

export default Meals;
