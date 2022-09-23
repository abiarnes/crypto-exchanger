import { useState } from "react";
import styled from "@emotion/styled";
import imgCrypto from './assets/img/img-crypto.png';

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
`

function App() {
  return (
  <Container>
    <Img src={imgCrypto} alt='Image Cryptocurrency' />
    <Heading>app</Heading>
  </Container>
  );
}

export default App;
