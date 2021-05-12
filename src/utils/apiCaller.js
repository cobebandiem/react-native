const API_URL='https://api-phone-shop.herokuapp.com';

export default function callApi(endpoint,method='GET',body=null,headers=null){
    return fetch(`${configs.API_URL}/${endpoint}`,{
        method,
        data: body,
        headers
    });
}