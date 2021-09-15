import { Summary } from "../Summary";
import { TrasactionTbale } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard(){
    return(
       <Container>
           <Summary/>
           <TrasactionTbale /> 
       </Container>
    )
}