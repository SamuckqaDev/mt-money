import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTbale(){

    useEffect(()=>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Devoloment web site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Devoloment web site</td>
                        <td>14/09/2021</td>
                    </tr>
                    <tr>
                        <td>Notebook gamer</td>
                        <td className="withdraw">-R$8.000</td>
                        <td>Eletronics</td>
                        <td>15/09/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}