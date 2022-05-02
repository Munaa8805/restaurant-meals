import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/Button";
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
        <Button bg="red">Hello world</Button>
      </div>
    </>
  );
};

export default Meals;
