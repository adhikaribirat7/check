import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  produt: [],
  addToCart: [],

};

export const productSlice = createSlice({
  name: "featureProduct",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      // console.log("called")
      action.payload.forEach((product) => {
        const newProduct = {
          id: nanoid(),
          title: product.title,
          price:product.price,
          rating:product.rating,
          description:product.description,
        };
        state.products.push(newProduct);
      });
    },
    productsCart: (state, action) => {
      state.produt = action.payload;
    },
    addToCart: (state, action) => {
      state.addToCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.addToCart = state.addToCart.filter(
        (product) => product !== action.payload
      );
    },
  },
});

export const { fetchProducts, productsCart, addToCart, removeFromCart } =
  productSlice.actions;
export default productSlice.reducer;
