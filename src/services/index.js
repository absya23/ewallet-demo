export const mapMoney = (amount) => {
    let newAmount = amount.replace("một", "1")
    let milionIndex = newAmount.indexOf(" triệu"); 
    let billionIndex = newAmount.indexOf(" tỷ");
    let result = Number(newAmount.replace(/\D/g,''))
    if (milionIndex > -1)
        result = result*1000000;    
    if (billionIndex > -1)
        result = result*1000000000;
    return result   
}