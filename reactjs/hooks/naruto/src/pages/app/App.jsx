import { useState } from 'react';

import styled from 'styled-components';

import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

export function App() {
  // Estado para armazenar as frases
  const [quoteState, setQuoteState] = useState({ quote: 'ok2', speaker: 'Speakers2'});

  const onUpdate = async () => {
    const quote = await getQuote();
    // const quote = {quote: 'Gaara', speaker: "It's not because I'm lazy, it's just because I don't care."};

    // att estado
    setQuoteState(quote);
    console.log(quote)
  }

  return (
    <Content>
      <Quotes quote={quoteState.quote} speaker={quoteState.speaker} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;