import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
         <Content>
         <img src={logoImg} alt="mt money" />
            <button>
                New transaction
            </button>
         </Content>
        </Container>
    )
}