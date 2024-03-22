import {SearchFormContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";
import {useForm} from "react-hook-form";
import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {useContext} from "react";
import {TransactionContext} from "../../../contexts/TransactionsContext.tsx";


const searchFormSchema = z.object({
    query: z.string()
})

type SeachFormInputs = z.infer<typeof searchFormSchema>
export function SearchForm() {
    const {fetchTransations} = useContext(TransactionContext)
    const {register, handleSubmit, formState:{isSubmitting}} = useForm<SeachFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransactions(data:SeachFormInputs) {
        if(fetchTransations){
            await fetchTransations(data.query)
        }


    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type='text'
                placeholder='Busque por Transações'
                {...register('query')}
            />
            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass size={24}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}