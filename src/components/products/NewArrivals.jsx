import React, { useEffect, useState } from "react";
import NewArrival from "./NewArrival";
import { useSelector } from "react-redux";

function NewArrivals({ title }) {
  const [length, setLength] = useState(5);
  const [isviewMore, setIsViewMore] = useState(false);
  const products = useSelector((state) => state.productReducer.products);

useEffect(() => {
  console.log(products)
}, [products])


  const lengthHandeler = () => {
    setIsViewMore((prev) => !prev);
    if (isviewMore) {
      setLength(5);
    } else {
      setLength(10);
    }
  };

  return (
    <>
      <div
        className="sm:col-span-12 bg-bg-grey p-3  col-span-7 w[100%] flex mt-24  
    flex-col justify-center items-center gap-4 "
      >
        <p className="text-6xl font-extrabold">
          {title ? title : "New ARRIVALS"}
        </p>
        <div className="w-full flex lg:flex-nowrap flex-wrap justify-center  ">
          {products.slice(0, length).map((obj) => (
            <NewArrival key={obj.id} id={obj.id} title={obj.title} price={obj.price} />
          ))}
        </div>
        <button
          type="submit"
          onClick={() => lengthHandeler()}
          className="border-2 border-gray-300 p-2 rounded-full
       w-[218px] text-xl font-semibold"
        >
          {!isviewMore ? " View More" : "View Less"}
        </button>
        {/* <hr className="sm:w-full bg-white border-2 "></hr> */}
      </div>
    </>
  );
}

export default NewArrivals;
