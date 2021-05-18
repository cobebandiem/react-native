import React, { createContext, useState } from "react";
import callApi from './../utils/apiCaller';
export const AppContext = createContext();
import { Alert } from 'react-native';
import { removeAccents } from './../utils/formatString';

const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  //Products store
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [isSearched, setIsSearch] = useState(false);
  let fetchProducts = async () => {
    const response = await callApi('');
    const fetchedProducts = await response.json();
    setProducts(fetchedProducts);
  }
  const searchProducts = (keySearch) => {
    let keySearchFormatted = removeAccents(keySearch);
    let searchedProducts = products.filter(product => {
      return removeAccents(product.name.toLowerCase()).indexOf(keySearchFormatted.trim().toLowerCase()) !== -1
    });
    setIsSearch(true);
    setSearch(searchedProducts);
  }

  //User store
  const [user, setUser] = useState({ id: 0 });
  let login = async (email, password, navigation) => {
    console.log(email);
    setIsLoading(true);
    const response = await callApi('login1', 'POST', null, { email, password });
    const resultLogin = await response.json();
    setIsLoading(false);
    if (resultLogin.isStatus) {
      setUser(resultLogin.user);
      navigation.replace('AppScreen');
    } else {
      Alert.alert('Đăng nhập thất bại!!', 'Vui lòng kiểm tra lại email or password!');
    }
  }
  let logout = () => {
    setUser({ id: 0 });
  }
  let register = async (userInfo) => {
    const { email, name, password, phone, address } = userInfo;
    const response = await callApi('users', 'POST', null, { email, name, password, phone, address });
    const resultRegister = await response.json();
    console.log(resultRegister);
  }
  let editUserInfo = async (userInfo) => {
    const response = await callApi('users', 'PUT', null, userInfo);
    const resultEditUserInfo = await response.json();
    if (resultEditUserInfo.isStatus === 1) {
      Alert.alert('Thay đổi thành công!!');
      setUser(userInfo);
    } else if (resultEditUserInfo.isStatus === 2) {
      Alert.alert('Thay đổi thất bại!!', 'Email này đã được sử dụng!!');
    } else if (resultEditUserInfo.isStatus === 3) {
      Alert.alert('Thay đổi thất bại!!', 'SDT này đã được sử dụng!!');
    }
  }
  let changePassword = async (passwords) => {
    const response = await callApi('password', 'PUT', null, {
      id: user.id,
      new_password: passwords.newPassword,
      old_password: passwords.oldPassword
    });
    const resultChangePassword = await response.json();
    if (resultChangePassword.isStatus === 1) {
      Alert.alert('Thay đổi mật khẩu thành công!!');
    } else if (resultChangePassword.isStatus === 2) {
      Alert.alert('Mật khẩu cũ không chính xác!!');
    }
  }


  //Carts store
  const [carts, setCarts] = useState([]);
  let findIndex = (id, carts) => {
    let index = -1;
    if (carts.length > 0) {
      index = carts.findIndex((cart) => cart.id === id);
    }
    return index;
  }
  let fetchCarts = async () => {
    const response = await callApi('carts', 'GET', null, { id: user.id });
    const fetchedCarts = await response.json();
    setCarts(fetchedCarts);
  }
  let addCarts = (product, quantity, isDetailPageRequest = false) => {
    let indexCart = findIndex(product.id, carts);
    let cartsFake = JSON.parse(JSON.stringify(carts));
    if (indexCart === -1) {
      cartsFake.push({
        ...product,
        quantityOrder: 1,
        checked: true
      });
      if (isDetailPageRequest) Alert.alert('Thêm vào giỏ hàng thành công!!');
    } else {
      if (cartsFake[indexCart].quantityOrder < product.quantity) {
        cartsFake[indexCart].quantityOrder += quantity;
        cartsFake[indexCart].checked = true;
        if (isDetailPageRequest) Alert.alert('Thêm vào giỏ hàng thành công!!');
      } else {
        Alert.alert('Thêm giỏ hàng thất bại!!', 'Bạn không thể thêm sản phẩm vì đã đạt tới giới hạn đặt hàng.!!');
        return;
      }
    }
    setCarts(cartsFake);
    callApi('carts', 'POST', null, { id_user: user.id, id: product.id, sl: quantity })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  let editCarts = (id_product, quantity) => {
    let indexCart = findIndex(id_product, carts);
    let cartsFake = JSON.parse(JSON.stringify(carts));
    cartsFake[indexCart].quantityOrder = quantity;
    setCarts(cartsFake);
    callApi('carts', 'PUT', null, { id_user: user.id, id: id_product, sl: quantity })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  let deleteCarts = (id_product) => {
    let indexCart = findIndex(id_product, carts);
    let cartsFake = JSON.parse(JSON.stringify(carts));
    cartsFake.splice(indexCart, 1);
    setCarts(cartsFake);
    callApi('carts', 'DELETE', null, { id_user: user.id, id: id_product })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  let changeCheckCart = (cart) => {
    let indexCart = findIndex(cart.id, carts);
    let cartsFake = JSON.parse(JSON.stringify(carts));
    cartsFake[indexCart].checked = !cartsFake[indexCart].checked;
    setCarts(cartsFake);
    callApi('changeChecked', 'POST', null, { id_user: user.id, id: cart.id })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  // sold store
  const [sold, setSold] = useState([]);
  let fetchSold = async () => {
    const response = await callApi('sold', 'GET', null, { id_user: user.id });
    const fetchedSold = await response.json();
    setSold(fetchedSold.result);
  }
  let updateSold = () => {
    callApi('sold', 'POST', null, { id: user.id })
      .then(response => response.json())
      .then(data => {
        setSold(data.result);
        data.result.map(cart => {
          console.log('don mua hang: ', cart.name, ' - ', cart.quantityOrder)
        })
        if (data.isStatus === 1) {
          Alert.alert('Đặt hàng thành công!', 'Sản phẩm của bạn sẽ được giao với thời gian ngắn nhất!')
        }
      });
    let cartsFake = JSON.parse(JSON.stringify(carts));
    cartsFake = cartsFake.filter(cart => cart.checked === false);
    setCarts(cartsFake);
  }




  const AppContextData = {
    isLoading,
    products,
    fetchProducts,
    searchProducts,
    search,
    isSearched,
    user,
    login,
    logout,
    register,
    editUserInfo,
    changePassword,
    carts,
    fetchCarts,
    addCarts,
    editCarts,
    deleteCarts,
    changeCheckCart,
    sold,
    fetchSold,
    updateSold
  };
  return (
    <AppContext.Provider value={AppContextData}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;