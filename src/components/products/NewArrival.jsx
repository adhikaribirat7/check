import React, { useEffect, useState } from "react";
import ronaldo from "../../assets/ronaldo.jpg.png";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

// import { productsCart } from "../  slices/singleProduct";
import { productsCart } from "../../slices/featureProduct";

function NewArrival({ title, id, price }) {
  const dispatch = useDispatch();
  const handleChnage = (id) => {
    dispatch(productsCart(id));
  };

  return (
    <div
      key={id}
      className="lg:basis-1/5 flex flex-col  justify-center items-center sm:p-2 "
    >
      <div className="rounded-2xl  flex  sm:flex-col justify-center items-center h-[298px] w-[295px] bg-white">
        {/* <div className="rounded-2xl  flex  sm:flex-col justify-center items-center sm:h-[300px] sm:w-[300px] h-[200px] w-[200px] bg-bg-grey"> */}
        <img
          src={ronaldo}
          alt=""
          className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-xl">{title}</span>
        <span className="text-xl hidden">{id}</span>
        <span className="text-xl font-semibold flex gap-3">
          Price:
          <span>{price}</span>
        </span>
      </div>
      <Link
        to="/single_products"
        className="sm:w-full flex flex-col items-center m-4 justify-center w-[50%]"
      >
        <button
          type="submit"
          onClick={() => handleChnage(id)}
          // onClick={() =>setsingleProduct(products.id)}
          className="text-black border-2 outline-none border-white  flex justify-center items-center font-semibold bg-white rounded-3xl sm:p-3 text-xl h-10 sm:w-[50%] w-full"
        >
          See More
        </button>
      </Link>
    </div>
  );
}

export default NewArrival;

// import React, { useEffect, useState } from 'react'
// import NewArrival from './NewArrival'
// import  {getProduct} from "../api/dynamicImages"
// import { GiSouthAfrica } from 'react-icons/gi'
// import { VscGlobe } from 'react-icons/vsc'

// function NewArrival() {
//   const [products,setProducts] = useState([])
//   // console.log(products)
//   const productImage =async ()=>{
//     const result =await getProduct()
//     setProducts(result.products)
//     console.log(products)
//   }
// useEffect(() => {
//   productImage()

// }, [])

//   return (
//     <div className="col-span-12 mt-24  flex border-2 border-black  w-full
//     flex-col justify-evenly items-center gap-4 "   >
//       <div>NEW ARRIVALS</div>

//       {products.map((obj)=>{
//         // console.log(obj.title)
//         <NewArrival key={obj.id} title={obj.title} id={obj.id}/>
//       })}
//     </div>
//   )
// }

// export default NewArrival
