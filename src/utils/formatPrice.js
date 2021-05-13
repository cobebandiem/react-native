export const formatMoneyToVND = (money = 0) => {
    if (money) {
        let moneyString = money.toString();
        let formattedMoneyStringToVND = moneyString.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
        return formattedMoneyStringToVND;
    }
    return money;
}
export const formatNumber = (money) => {
    let moneyString = money + '';
    var rgx = /(\d+)(\d{3})/;
    //Block code formatted moneyString to VND
    while (rgx.test(moneyString)) {
        moneyString = moneyString.replace(rgx, '$1' + '.' + '$2');
    }
    return 'đ' + moneyString;
}