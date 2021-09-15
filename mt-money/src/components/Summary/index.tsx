import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
    return(
       <Container>
           <div>
               <header>
                   <p>Income</p>
                   <img src={incomeImg} alt="" />
               </header>
               <strong>R$12.000</strong>
           </div>
           <div>
               <header>
                   <p>Outcome</p>
                   <img src={outcomeImg} alt="" />
               </header>
               <strong>-R$8.000</strong>
           </div>
           <div>
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="" />
               </header>
               <strong>R$4.000</strong>
           </div>
         
       </Container>
    )
}