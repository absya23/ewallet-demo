export const mapMoney = (amount) => {
    let milionIndex = amount.indexOf(" triệu"); 
    let billionIndex = amount.indexOf(" tỷ");
    let result = Number(amount.replace(/\D/g,''))
    if (milionIndex > -1)
        result = result*1000000;    
    if (billionIndex > -1)
        result = result*1000000000;
    return result   
}