import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import jutsoSound from '../../sounds/jutso.mp3'

const audio = new Audio(jutsoSound);

export function App() {
  // Verificar se componente está montado
  const isMounted = useRef(true);

  // Estado para armazenar as frases
  const [quoteState, setQuoteState] = useState({ quote: 'loading quote...', speaker: 'loading speakers'});

  const onUpdate = async () => {
    const quote = await getQuote();

    // Assim não vai tentar tocar a música, caso o componente
    // não esteja montado
    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  }

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, [])

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