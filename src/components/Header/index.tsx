import imgLogo from "../../assets/logo.png";
import { Conatiner, Content } from "./styles";

export function Header() {
  return (
    <Conatiner>
      <Content>
        <img src={imgLogo} alt="mt money" />
        <button type="button">New transaction</button>
      </Content>
    </Conatiner>
  );
}
