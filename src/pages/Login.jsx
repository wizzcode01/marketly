import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Product from "../components/Product";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const data = {
    email,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const result = JSON.stringify(data);

    if (password.length < 6) {
      setMessage("password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email === "test@gmail.com" && password === "123456") {
        setMessage("Login successful");
      } else {
        setMessage("Incorrect email or password");
      }
    }, 3000);

    console.log(result);
    console.log(email);
    console.log(password);

    navigate("/dashboard");
  };

  //   const [btn, newBtn] = useState(0); // let btn = 0, newBtn => function
  // const products = {
  //   Expore: ["food", "electronices", "utentils", "sand"],
  //   Items: ["item1", "item2", "item3", "item4"],
  // };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-lg h-80 mx-auto mt-20 rounded-2xl shadow-2xl justify-center items-center"
      >
        {message == "Login successful" ? (
          <p className="text-green-600">{message}</p>
        ) : (
          <p className="text-red-600">{message}</p>
        )}

        <h1 className="font-bold text-2xl ">Login form</h1>
        <div className="flex flex-col gap-6 mt-4 ">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 w-64  py-2 border border-gray-500 rounder-xl outline-0"
            type="text"
            placeholder="email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 w-64 py-2 border border-gray-500 rounder-xl outline-0"
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 text-xl font-semibold cursor-pointer px-4 py-2 text-white"
          >
            {loading ? "Logging in..." : "Enter"}
          </button>
        </div>
      </form>

      {/* {Object.entries(products).map(([heading, item]) => (
        <div key={heading}>
          <h1 className="font-bold text-2xl text-green-600">{heading}</h1>
          <ul>
            {item.map((list) => (
              <li key={list}>
                <a href="">{list}</a>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </>
  );
};

export default Login;
