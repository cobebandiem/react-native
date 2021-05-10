export const formatVnd=(money)=>{
    money=money.toString();
    console.log(money)
    // let output = money.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
    // return output;
    let rs='₫';
    let arr=[];
    let count=3;
    while(money.length+3>count){
        if(money.length<count){
            arr.push(money.substring(0,3+money.length-count));
        }else{
            arr.push(money.substring(money.length-count,money.length-count+3));
            count+=3;
        }  
    }
    console.log(arr)
    for(let i=arr.length;i>0;i--){
        if(i-1===0){
            rs+=arr[i-1];
        }else{
            rs+=arr[i-1]+',';
        }
    }
    console.log(rs)
    return rs;
}