import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighlight, TransactionContainer, TransactionsTable} from "./styles.ts";
import {SearchForm} from "./SearchForm";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>


            <TransactionContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>
                <tr>
                    <td width="50%">Desenvolvimento de Site</td>
                    <td>
                        <PriceHighlight variant="income">
                            R$ 12.000,00
                        </PriceHighlight>
                    </td>
                    <td>Venda</td>
                    <td>13/04/2024</td>
                </tr>
                <tr>
                    <td width="50%">Hamburguer</td>
                    <td>
                        <PriceHighlight variant="outcome">
                            R$ 59,00
                        </PriceHighlight>
                    </td>
                    <td>Alimentação</td>
                    <td>10/04/2022</td>
                </tr>
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}