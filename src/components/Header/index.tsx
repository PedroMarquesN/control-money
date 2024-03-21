import {HeaderContainer, HeaderContent, NewTransactionButton} from "./styles.ts";
//import IconeIgnite from '../../assets/logo.svg'
import ImageLogo from '../../assets/_28fe16db-da61-4173-a698-358407438915.jpeg'
import * as Dialog from '@radix-ui/react-dialog';
import {NewTransactionModal} from "../NewTransactionModal";
export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={ImageLogo} style={{height: '100px' ,width:' 100px' }}/>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}