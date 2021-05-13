const API_URL='https://api-phone-shop.herokuapp.com';

export default function callApi(endpoint,method='GET',body=null,headers={'Content-Type': 'application/json'}){
    return fetch(`${API_URL}/${endpoint}`,{
        method,
        data: body,
        headers
    });
}