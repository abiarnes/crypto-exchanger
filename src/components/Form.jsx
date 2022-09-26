import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { currencyList } from "../data/currencyList";
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {
    const [ crypto, setCrypto ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ currencySelected, SelectCurrency ] = useSelectCurrency('Choose a currency', currencyList);
    const [ cryptoSelected, SelectCrypto ] = useSelectCurrency('Choose a cryptocurrency', crypto);


    useEffect(() => {
      const fetchAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const response = await fetch(url);
        const result = await response.json();

        const arrayCryptocurrency = result.Data.map(item => {

            const cryptoListObj = {
                id: item.CoinInfo.Name,
                name: item.CoinInfo.FullName
            } 
            return cryptoListObj;   
        })

        setCrypto(arrayCryptocurrency);
      }

      fetchAPI();
    }, []) 
    
    const handleSubmit = e => {
        e.preventDefault();

        if([currencySelected, cryptoSelected].includes('')) {
            setError(true);
            return;
        }
    }

    return (
        <>
        {error && <Error />}
        <form
            onSubmit={handleSubmit}
        >
            <SelectCurrency />
            <SelectCrypto />

            <InputSubmit type="submit" value="Price" />
        </form>
        </>
    );
}
 
export default Form;