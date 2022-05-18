import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import useHttp from "../hooks/use-http";
import { Container } from "../components/Container";
import Card from "../components/Card/Card";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import Search from "../components/Search/Search";
const Meals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("pizza");

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  useEffect(() => {
    const transformTasks = (tasksObj) => {
      setTasks(tasksObj.recipes);
    };
    fetchTasks(
      {
        url: `https://forkify-api.herokuapp.com/api/search?q=${query}`
      },
      transformTasks
    );
  }, [fetchTasks, query]);
  const queryFunction = (q) => {
    setQuery(q);
  };
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
    content = tasks.map((task, index) => <Card task={task} key={index} />);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container mt="80px">
        <Search getQuery={queryFunction} />
        {content}
      </Container>
    </>
  );
};

export default Meals;
