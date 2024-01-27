// src/components/CreditCard/styledComponents.js
import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  position: relative;
  width: 375px;
  height: 240px;
  border-radius: 15px;
  background-color: #3b4b69;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-family: 'Roboto', sans-serif;
`
export const MainContainer = styled.div`
font-family:"Roboto";
`
export const Head = styled.h1`
 font-size:40px;
 color:white;

`
export const Para = styled.p`
 font-size:32px;
 color:white;
 
`
export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardNumber = styled.input`
  background-color: #475569;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  color: white;
  margin-bottom: 10px;
`

export const CardHolder = styled.input`
  background-color: #475569;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  color: white;
`
