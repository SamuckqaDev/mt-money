import { useEffect } from "react";
import { Container } from "./sytles";

export function TransactionsTable() {

  useEffect(()=> {
    fetch('http://localhost:3000/api/transactions/')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software development</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Development</td>
            <td>04/09/2022</td>
          </tr>
          <tr>
            <td>Computer Maintenance</td>
            <td className="withdraw">R$ 500,00</td>
            <td>Maintenance</td>
            <td>04/09/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
