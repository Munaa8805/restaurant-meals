import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { Button } from "../components/Button";
import useHttp from "../hooks/use-http";
import { Container } from "../components/Container";
import Card from "../components/Card/Card";
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

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log("tasks", tasks);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container mt="80px">
        {tasks.map((task) => (
          <Card task={task} />
        ))}
      </Container>
    </>
  );
};

export default Meals;
