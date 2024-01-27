import {useState} from 'react'
import {
  CreditCardContainer,
  CardBackground,
  CardDetails,
  CardNumber,
  CardHolder,
  Head,
  Para,
  MainContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const handleCardNumberChange = event => {
    setCardNumber(event.target.value)
  }

  const handleCardHolderChange = event => {
    setCardHolder(event.target.value)
  }

  return (
    <MainContainer>
      <Head>CREDIT CARD</Head>
      <Head>Payment Method</Head>
      <CreditCardContainer data-testid="creditCard">
        <CardBackground />
        <CardDetails>
          <CardNumber
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          {cardNumber && <Para>{cardNumber}</Para>}
          <Para>CARDHOLDER NAME</Para>
          <CardHolder
            type="text"
            placeholder="Cardholder Name"
            value={cardHolder}
            onChange={handleCardHolderChange}
          />
        </CardDetails>
      </CreditCardContainer>
    </MainContainer>
  )
}

export default CreditCard
