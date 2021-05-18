import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ProductDetails from './../components/ProductDetails';
function ProductDetailsContainer(props) {
  const { addCarts } = useContext(AppContext);
  return (
    <ProductDetails
      addCarts={addCarts}
      route={props.route}
      navigation={props.navigation} />
  );
}

export default ProductDetailsContainer;