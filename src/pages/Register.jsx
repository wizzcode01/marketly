import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const data = {
    name,
    email,
    password,
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    const result = JSON.stringify(data);

    if (name.trim().length < 2) {
      setMessage("username must be at least 3 characters");
    }

    if (password.length < 6) {
      setMessage("password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user") || "null");
      if (
        savedUser &&
        savedUser.email.toLowerCase() === email.trim().toLowerCase()
      ) {
        setMessage("This email is already registered");
        setLoading(false);
        return;
      }

      const newUser = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      console.log(newUser);
      setMessage("Registered successfully...");
      setLoading(false);

      navigate("/about");
    }, 3000);

    console.log(result);
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="flex flex-col w-lg h-80 mx-auto mt-20 rounded-2xl shadow-2xl justify-center items-center"
      >
        {message == "Registered successfully..." ? (
          <p className="text-green-600">{message}</p>
        ) : (
          <p className="text-red-600">{message}</p>
        )}

        <h1 className="font-bold text-2xl ">Create an acc</h1>
        <div className="flex flex-col gap-6 mt-4 ">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 w-64  py-2 border border-gray-500 rounder-xl outline-0"
            type="text"
            placeholder="username"
            required
          />
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
            {loading ? "Creating account..." : "Register"}
          </button>
          <p>
            {" "}
            Already have an account?
            <Link to="/about">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
