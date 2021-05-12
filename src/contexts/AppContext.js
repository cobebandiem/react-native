import React, { createContext, useState } from "react";
import callApi from './../utils/apiCaller';
export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    //Products store
    const [products,setProducts]= useState([]);
    const [search,setSearch]= useState([]);
    let fetchProducts=async ()=>{
        const res=await fetch('https://api-phone-shop.herokuapp.com/');
        const data=await res.json();
        setProducts(data);
        console.log('data '+data);
    }
    const searchProducts=(key)=>{
        let search=products.filter(product => product.name.toLowerCase().indexOf(key.trim().toLowerCase())!==-1);
    }

    //Carts store
    const [carts,setCarts]= useState([]);
    let fetchCarts=async (id_user)=>{
        const res=await fetch('https://api-phone-shop.herokuapp.com/carts',{
            method:'GET',
            headers:{
                id:id_user
            }
        });
        const data=await res.json();
        setCarts(data);
    }
    let addCarts=async (id_user, id_product, sl)=>{
        const res=await fetch('https://api-phone-shop.herokuapp.com/carts',{
            method:'POST',
            headers:{
                id_user,
                id:id_product,
                sl
            }
        });
        const data=await res.json();
        setCarts(data.result);
    }
    let editCarts=async (id_user, id_product, sl)=>{
        const res=await fetch('https://api-phone-shop.herokuapp.com/carts',{
            method:'PUT',
            headers:{
                id_user,
                id:id_product,
                sl
            }
        });
        const data=await res.json();
        console.log(data.length);
    }
    let deleteCarts=async (id_user, id_product)=>{
        const res=await fetch('https://api-phone-shop.herokuapp.com/carts',{
            method:'DELETE',
            headers:{
                id_user,
                id:id_product
            }
        });
        const data=await res.json();
        console.log(data.length);
    }

    //User store
    const [userInfo, setUserInfo]=useState({});
    const [id, setId]=useState(0);
    let login=async (email, password)=>{
        console.log(email);
        console.log(password);
        const res=await fetch('https://api-phone-shop.herokuapp.com/login',{
            method:'POST',
            headers:{
                email,
                password
            }
        });
        const data=await res.json();
        if(data.isStatus){
            console.log('data.id', data.id);
            setId(data.id);
            console.log('id1 '+id);
        }
        console.log('id2 '+id);
    }
    let logout =()=>{
        setId(0);
    }
    






    const AppContextData={
        products,
        fetchProducts,
        searchProducts,
        userInfo,
        id,
        login,
        logout
    };
    return(
        <AppContext.Provider value={AppContextData}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;