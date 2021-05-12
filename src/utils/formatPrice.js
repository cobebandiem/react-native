export const formatVnd=(money)=>{
    money=money.toString();
    console.log(money)
    let output = money.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
    return output;
}
export const formatNumber=(nStr)=> {
    nStr += '';
    x = nStr.split(',');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return 'đ'+x1 + x2;
}