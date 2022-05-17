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

    // att estado
    setQuoteState(quote);
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