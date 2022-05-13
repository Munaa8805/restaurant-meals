import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { Button } from "../components/Button";
import useHttp from "../hooks/use-http";
import { Container } from "../components/Container";
import Card from "../components/Card/Card";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
const Meals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  useEffect(() => {
    const transformTasks = (tasksObj) => {
      setTasks(tasksObj.recipes);
    };
    fetchTasks(
      {
        url: "https://forkify-api.herokuapp.com/api/search?q=pizza"
      },
      transformTasks
    );
  }, [fetchTasks]);

  let content;
  if (isLoading) {
    content = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <LoadingSpinner />
      </div>
    );
  } else {
    content = tasks.map((task) => <Card task={task} />);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log("tasks", tasks);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container mt="80px">{content}</Container>
    </>
  );
};

export default Meals;
