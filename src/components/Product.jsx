import { useState } from "react";

const Product = ({ children }) => {
  // const [increase, setIncrease] = useState(baseData);

  // const handleClick = () => {
  //   const nextValue = increase + 1;
  //   setIncrease(nextValue);
  //   onIncrease(nextValue);
  // };

  return (
    <>
      {/* <button
        className="text-xl bg-green-600 w-64 p-2 text-white"
        onClick={handleClick}
      >
        Increase
      </button>
      <h2>{increase}</h2> */}
      <div>{children}</div>
    </>
  );
};

export default Product;
