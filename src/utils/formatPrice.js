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
  var regex = /(\d+)(\d{3})/;
  //Block code formatted moneyString to VND
  while (regex.test(moneyString)) {
    moneyString = moneyString.replace(regex, '$1' + '.' + '$2');
  }
  return 'đ' + moneyString;
}