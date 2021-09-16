import { Summary } from "../Summary";
import { TransactionTbale } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard(){
    return(
       <Container>
           <Summary/>
           <TransactionTbale /> 
       </Container>
    )
}