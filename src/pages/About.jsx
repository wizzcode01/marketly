import { useState } from "react";

const About = () => {
  //   const [btn, newBtn] = useState(0); // let btn = 0, newBtn => function
  const [name, setName] = useState("wisdom");

  const changeName = () => {
    setName((prev) => (prev === "wisdom" ? "samuel" : "wisdom"));
  };

  return (
    <>
      <div>Welcome to about page</div>
      <h1 className="text-2xl font-bold">Name: {name}</h1>
      <h2>Email: </h2>
      <button
        onClick={changeName}
        className="px-6 rounded-2xl py-2 bg-green-600 text-white"
      >
        Change name
      </button>
      {/* <div className="w-3xl flex flex-col gap-4 justify-center items-center">
        <h2 className="text-5xl font-bold">{btn}</h2>
        <div className="flex gap-3 ">
          <button
            onClick={() => newBtn(btn + 1)}
            className="px-6 rounded-2xl py-2 bg-green-600 text-white"
          >
            Increase
          </button>
          <button
            onClick={() => newBtn(0)}
            className="px-6 rounded-2xl py-2 bg-yellow-600 text-white"
          >
            Reset
          </button>
          <button
            onClick={() => newBtn(btn - 1)}
            className="px-6 rounded-2xl py-2 bg-red-600 text-white"
          >
            Decrease
          </button>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default About;
