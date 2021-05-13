import React, { createContext, useState } from "react";
import callApi from './../utils/apiCaller';
export const AppContext = createContext();
import { Alert } from 'react-native';

const AppContextProvider = ({ children }) => {
  //Products store
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  let fetchProducts = async () => {
    const res = await callApi('');
    const data = await res.json();
    setProducts(data);
  }
  const searchProducts = (key) => {
    let search = products.filter(product => product.name.toLowerCase().indexOf(key.trim().toLowerCase()) !== -1);
  }

  //User store
  const [user, setUser] = useState({ id: 0 });
  let login = async (email, password) => {
    console.log(email, password);
    const res = await callApi('login1', 'POST', null, { email, password });
    const data = await res.json();
    if (data.isStatus) {
      setUser(user => ({ ...user, ...data.user }));
    } else {
      Alert.alert('Đăng nhập thất bại!!', 'Vui lòng kiểm tra lại email or password!');
    }
  }
  let logout = () => {
    setUser({ id: 0 });
  }
  let register = async (userInfo) => {
    const { email, name, password, phone, address } = userInfo;
    const res = await callApi('users', 'POST', null, { email, name, password, phone, address });
    const data = await res.json();
    console.log(data);
  }


  //Carts store
  const [carts, setCarts] = useState([]);
  let fetchCarts = async () => {
    console.log(user.id);
    const res = await callApi('carts', 'GET', null, { id: user.id });
    const data = await res.json();
    console.log('fetch data',data)
    setCarts(data);
  }
  let addCarts = async ( id_product, sl) => {
    console.log(typeof sl)
    const res = await fetch('https://api-phone-shop.herokuapp.com/carts', {
      method: 'PUT',
      headers: {
        id_user:user.id,
        id: id_product,
        sl
      }
    });
    fetchCarts();
  }
  let editCarts = async (id_user, id_product, sl) => {
    const res = await fetch('https://api-phone-shop.herokuapp.com/carts', {
      method: 'PUT',
      headers: {
        id_user,
        id: id_product,
        sl
      }
    });
    const data = await res.json();
    console.log(data.length);
  }
  let deleteCarts = async (id_product) => {
    const res = await fetch('https://api-phone-shop.herokuapp.com/carts', {
      method: 'DELETE',
      headers: {
        id_user:user.id,
        id: id_product
      }
    });
    const data = await res.json();
    console.log(data);
    fetchCarts();
  }





  const AppContextData = {
    products,
    fetchProducts,
    searchProducts,
    user,
    login,
    logout,
    register,
    carts,
    fetchCarts,
    addCarts,
    deleteCarts
  };
  return (
    <AppContext.Provider value={AppContextData}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;