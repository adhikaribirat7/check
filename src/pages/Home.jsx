import React, { useEffect, useState } from "react";

import Hero from "../components/Hero/Hero";
import Brands from "../components/Hero/Brands";
import NewArrival from "../components/products/NewArrivals";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../slices/featureProduct";
import { getProduct } from "../api/dynamicImages";


const Home = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const productImage = () => {
    const fetchData = async () => {
      const result = await getProduct();
      setProducts(result.products);
    };
    fetchData();
  };

  useEffect(() => {
    productImage();
  }, []);

  useEffect(() => {
    dispatch(fetchProducts(products));
  }, [products]);

  return (
    <>
      <Hero />
      <Brands/>
      <NewArrival/>

    </>
  );
};

export default Home;
