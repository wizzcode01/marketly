import { useState } from "react";
import Product from "../components/Product";

const Delivery = () => {
  // useEffect it allows side operations
  // const [users, setUser] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch users");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUser(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <p className="text-green-600">Loading...</p>;
  // }
  // if (error) {
  //   return <p className="text-red-600">{error}</p>;
  // }
  //const [increase, setIncrease] = useState(10)
  // const dataBase = 10;
  // const handleIncrease = (increase) => {
  //   console.log(increase);
  // };

  return (
    <>
      {/* {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))} */}
      <Product>
        <h1>Fast food</h1>
        <h4>Sweet delicious meal</h4>
      </Product>
    </>
  );
};

export default Delivery;
