import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">WebSite Development</td>
              <td>
                <PriceHighlight variant="income">$ 12,000.00</PriceHighlight>
              </td>
              <td>Sales</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- $ 50,00</PriceHighlight>
              </td>
              <td>Food</td>
              <td>04/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
