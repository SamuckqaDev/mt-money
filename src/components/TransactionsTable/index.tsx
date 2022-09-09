import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./sytles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

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
