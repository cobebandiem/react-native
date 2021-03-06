import React, { createContext, useState } from "react";
import callApi from './../utils/apiCaller';
export const AppContext = createContext();
import { Alert } from 'react-native';
import { removeAccents } from './../utils/formatString';
import { useTranslation } from 'react-i18next';

const AppContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  //Language store
  const [language, setLanguage] = useState('vn');
  let changeLanguage = (language) => {
    setLanguage(language);
  }

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
      //remove accents in string and format string to lowerCase, search for element that contain keywords then return element if result different -1 
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
      Alert.alert(`${t('SignInFail')}`, `${t('SignInFailMessage')}`);
    }
  }
  let logout = () => {
    setUser({ id: 0 });
  }
  let register = async (userInfo, navigation) => {
    const { email, name, password, phone, address } = userInfo;
    const response = await callApi('users', 'POST', null, { email, name, password, phone, address });
    const resultRegister = await response.json();
    console.log(resultRegister);
    if (resultRegister.isStatus === 1) {
      Alert.alert(`${t('RegisterSuccess')}`);
      navigation.navigate('SignIn');
    } else if (resultRegister.isStatus === 2) {//status=2 =>  email is already used
      Alert.alert(`${t('ChangeInfoFail')}`, `${t('EmailUsed')}`);
    } else if (resultRegister.isStatus === 3) {//status=3 =>  phone number is already used
      Alert.alert(`${t('ChangeInfoFail')}`, `${t('PhoneUsed')}`);
    }
  }
  let editUserInfo = async (userInfo) => {
    const response = await callApi('users', 'PUT', null, userInfo);
    const resultEditUserInfo = await response.json();
    if (resultEditUserInfo.isStatus === 1) {
      Alert.alert(`${t('ChangeInfoSuccess')}`);
      setUser(userInfo);
    } else if (resultEditUserInfo.isStatus === 2) {//status=2 =>  email is already used
      Alert.alert(`${t('ChangeInfoFail')}`, `${t('EmailUsed')}`);
    } else if (resultEditUserInfo.isStatus === 3) {//status=3 =>  phone number is already used
      Alert.alert(`${t('ChangeInfoFail')}`, `${t('PhoneUsed')}`);
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
      Alert.alert(`${t('ChangePasswordSuccess')}`);
    } else if (resultChangePassword.isStatus === 2) {//status=2 => password isn't correct
      Alert.alert(`${t('ChangePasswordFail')}`);
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
    let indexProductInStore = findIndex(product.id, products);
    let cartsFake = JSON.parse(JSON.stringify(carts));
    if (indexCart === -1) {
      cartsFake.push({
        ...product,
        quantityOrder: 1,
        checked: true
      });
      if (isDetailPageRequest) Alert.alert(`${t('AddCartSuccess')}`);
    } else {
      //check product.quantity in store must less than quantity want add in cart
      if (cartsFake[indexCart].quantityOrder < products[indexProductInStore].quantity) {
        cartsFake[indexCart].quantityOrder += quantity;
        cartsFake[indexCart].checked = true;
        if (isDetailPageRequest) Alert.alert(`${t('AddCartSuccess')}`);
      } else {
        Alert.alert(`${t('AddCartFail')}`, `${t('AddCartFailLimited')}`);
        return;
      }
    }
    setCarts(cartsFake);
    //call api to update on server-side
    callApi('carts', 'POST', null, { id_user: user.id, id: product.id, sl: quantity })
      .then(response => response.json())
      .then(data => console.log("carts(POST)", data));
  }
  let editCarts = (id_product, quantity) => {
    let indexCart = findIndex(id_product, carts);
    let cartsFake = JSON.parse(JSON.stringify(carts));
    cartsFake[indexCart].quantityOrder = quantity;
    if (cartsFake[indexCart].quantityOrder === 0) {
      cartsFake.splice(indexCart, 1);
    }
    setCarts(cartsFake);
    callApi('carts', 'PUT', null, { id_user: user.id, id: id_product, sl: quantity })
      .then(response => response.json())
      .then(data => console.log('data : ', data));
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
  //delivering
  const [delivering, setDelivering] = useState([]);
  let fetchDelivering = async () => {
    const response = await callApi('delivering', 'GET', null, { id_user: user.id });
    const fetchedDelivering = await response.json();
    setDelivering(fetchedDelivering.result);
  }
  //getSold
  const [getSold, setGetSold] = useState([]);
  let fetchGetSold = async () => {
    const response = await callApi('getsold', 'GET', null, { id_user: user.id });
    const fetchedGetSold = await response.json();
    setGetSold(fetchedGetSold.result);
  }
  //confirm
  const [confirm, setConfirm] = useState([]);
  let fetchConfirm = async () => {
    const response = await callApi('confirm', 'GET', null, { id_user: user.id });
    const fetchedConfirm = await response.json();
    setConfirm(fetchedConfirm.result);
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
          Alert.alert(`${t('OrderProductSuccess')}`, `${t('OrderProductSuccessMessage')}`);
          //update products store
          let cartsChecked = data.cartsChecked;
          let cloneProducts = JSON.parse(JSON.stringify(products));
          cloneProducts.map((product, index) => {
            cartsChecked.map((cart) => {
              if (cart.idProduct === product.id) {
                cloneProducts[index].quantity -= cart.quantityOrder;
              }
            })
          })
          setProducts(cloneProducts);
        }
      });
    //update carts
    let cartsFake = JSON.parse(JSON.stringify(carts));
    cartsFake = cartsFake.filter(cart => cart.checked === false);
    setCarts(cartsFake);
  }
  const [code,setCode]=useState('');
  let getCode = async (navigation) => {
    setIsLoading(true);
    const response = await callApi('getcode', 'GET', null, { email:user.email });
    const resultGetCode = await response.json();
    setIsLoading(false);
    setCode(resultGetCode);
    navigation.navigate('Otp');
  }





  const AppContextData = {
    isLoading,
    language,
    changeLanguage,
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
    updateSold,
    delivering,
    fetchDelivering,
    getSold,
    fetchGetSold,
    confirm,
    fetchConfirm,
    setIsLoading,
    getCode,
    code
  };
  return (
    <AppContext.Provider value={AppContextData}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;