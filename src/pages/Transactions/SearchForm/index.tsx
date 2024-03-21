import {SearchFormContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input/>

            <button><MagnifyingGlass size={24}/>Buscar</button>
        </SearchFormContainer>
    )
}