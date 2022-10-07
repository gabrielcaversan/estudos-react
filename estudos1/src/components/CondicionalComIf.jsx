//Dentro do componente If, eu coloquei uma função com o props.test, que é o test que usei na frente de If para chamar a condição. Se a expressão da condição for verdadeira, ele vai retornar o props.children, ou seja, tudo que você passou dentro da tag <If>

import React from "react";
import If from "./If"

export default props => {

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <If test={props.numero % 2 == 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 == 1}>
                <span>Ímpar</span>
            </If>
        </div>
    )
}