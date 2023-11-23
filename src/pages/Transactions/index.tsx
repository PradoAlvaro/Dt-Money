import { Summary } from "../../Summary";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formater";
import { useContextSelector } from "use-context-selector";


export function Transactions() {
  const transactions = useContextSelector(TransactionsContext,(context) => {
    return context.transactions
   })
  

  
  return(
      <div >
        <Header/>
        <Summary/>

      <TransactionsContainer>
        <SearchForm/>
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
              <td width="49%"> {transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- ' }
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
    )
}