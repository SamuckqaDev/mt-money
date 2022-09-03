import imgLogo from "../../assets/logo.png";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="mt money" />
        <button type="button">New transaction</button>
      </Content>
    </Container>
  );
}
