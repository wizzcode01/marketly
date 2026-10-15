// allows users to select how many tasks they want to create, set date and time.

import { useState } from "react";

const getLocalDate = () => {
  const date = new Date();
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
  ].join("-");
};

const TaskForm = () => {
  const [taskCount, setTaskCount] = useState("1");
  const [task, setTask] = useState([
    {
      title: "",
      date: getLocalDate(),
      time: "",
    },
  ]);

  return (
    <>
      <div></div>
    </>
  );
};

export default TaskForm;
