import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import { removeAccents } from './../utils/formatString';

export const productsReducer = async (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:{
      const response = await callApi('');
      const fetchedProducts = await response.json();
      state.products=fetchedProducts
      console.log(state);
      return state;
    }
    case SEARCH_PRODUCTS:{
      let keySearchFormatted = removeAccents(keySearch);
      let searchedProducts = state.products.filter(product => {
        return removeAccents(product.name.toLowerCase()).indexOf(keySearchFormatted.trim().toLowerCase()) !== -1
      });
      state.isSearch=true;
      state.search=searchedProducts;
      console.log(state);
      return state;
    }
    default: {
      return state;
    }
  }
}