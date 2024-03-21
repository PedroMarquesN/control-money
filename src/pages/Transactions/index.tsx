import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighlight, TransactionContainer, TransactionsTable} from "./styles.ts";
import {SearchForm} from "./SearchForm";
import {useContext} from "react";
import {TransactionContext} from "../../contexts/TransactionsContext.tsx";




export function Transactions() {
    const {transactions} = useContext(TransactionContext)

    return (
        <div>
            <Header/>
            <Summary />


            <TransactionContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    R${transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    )
                })}
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}