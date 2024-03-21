import * as Dialog from "@radix-ui/react-dialog";
import {CloseButton, Content, Overlay, TransactionType, TransactionTypeButton} from "./styles.ts";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";
import * as z  from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>
export function NewTransactionModal() {

    const {register, handleSubmit,formState:{isSubmitting}} = useForm<newTransactionFormInputs>({
            resolver: zodResolver(newTransactionFormSchema)
        }
    )
    
    function handleCreateNewTransaction(data: newTransactionFormInputs) {
        
    }
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input {...register('description')} type="text" placeholder="Descrição"/>
                    <input {...register('price', {valueAsNumber: true})} type="number" placeholder="Preço"/>
                    <input {...register('category')}type="text" placeholder="Categoria"/>
                    <TransactionType>
                        <TransactionTypeButton value='income' variant='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton value='outcome' variant='outcome'>
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button disabled={isSubmitting} type='submit'>Cadastrar</button>
                </form>


            </Content>
        </Dialog.Portal>
    )
}