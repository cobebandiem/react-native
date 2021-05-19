import React, { createContext, useReducer } from "react";
export const ProductsContext = createContext();
export { productsReducer } from './../reducers/productsReducer';
const ProductsContextProvider = ({ children }) => {
  let initialState = {
    products: [],
    isSearch: false,
    search: []
  }
  const [productsStore, dispatch] = useReducer(productsReducer, initialState);
  const ProductsContextData = {
    productsStore,
    dispatch
  };
  return (
    <ProductsContext.Provider value={ProductsContextData}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsContextProvider;