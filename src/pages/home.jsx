import {useState} from 'react';
import { useEffectOnce } from "../customHooks/customHooks";
import { getCoinsMarket } from "../services/api";

const Home = () => {

    const [coins, setCoins] = useState([]);
    useEffectOnce(() =>{
        async function getData() {
            const res = await getCoinsMarket();
            if(res.status === 200) {
                console.log(res);
                setCoins (res.data)
            } else {
                console.log(res);
            }
        }
       getData();
    }, [])
    return (
        <div>Home</div>
    )
}
export default Home;

//REACT18: apar 2 array uri pentru ca orice componenta se executa la prima montare, se demonteaza si se monteaza la loc
// custom hook - au 'use' in fata



