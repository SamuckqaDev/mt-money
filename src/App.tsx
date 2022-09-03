import styled from 'styled-components'
import { GlobalStyled } from './styles/global';

const Title = styled.h1 `
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
      <Title>Hello WOlrd !</Title>
      <GlobalStyled />
    </div>
   
  );
}

