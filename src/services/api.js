import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers:{'Accept': 'application/json'}
})  

const getCoinsMarkets =  (pageNo) => { 
    //este call de api deci e fct asincrona
    // await se scrie dupa return, dar acum nu e cazul pentru ca 
    //orice fct asincrona returneaza un promise

    return instance.get('/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page='+pageNo)
}

const getCoinById = (id) => {
    return instance.get('/coins/' + id);
}

export { getCoinsMarkets, getCoinById }

//metoda create creaza o instanta noua de axios
//in oop totul este un ob - o varianta care e construita dintr-o clasa 

