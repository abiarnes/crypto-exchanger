import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imgCrypto from './assets/img/img-crypto.png';
import Form from "./components/Form";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

const Img = styled.img`
  max-width: 400px;
  margin: 100px auto 0 auto;
  width: 80%;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', Sans Serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [currency, setCurrency] = useState({});

  useEffect(() => {
    if(Object.keys(currency).length > 0) {
      const priceCrypto = async () => {
        const { currencySelected, cryptoSelected } = currency;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${currencySelected}`
        await 
      }

      priceCrypto();
    }    
  }, [currency])

  return (
  <Container>
    <Img src={imgCrypto} alt='Image Cryptocurrency' />
    <div>
      <Heading>Instant cryptocurrency trading</Heading>
      <Form setCurrency={setCurrency} />
    </div>
  </Container>
  );
}

export default App;
