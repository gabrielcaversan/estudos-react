import React from "react";

import produtos from "../data/produtos";

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => { {/*A função map vai varrer cada um dos produtos e transformar um objeto do tipo produto (Ex: {id: 1, nome: 'Caneta', preco: 7.59}) em um trecho de código JSX. Por isso utilizar o map, ele serve para transformar */}
            return <li key={prod.id}> {/*O React precisa de uma chave (key) para entender uma repetição e conseguir detectar quando há uma mudança (ordem dos elementos ou coisa do tipo). Ou seja, quando usa repetição, necessita de uma chave. Aqui utilizamos um atributo que tenha valor único, por isso usamos o ID do produto. */}
                {prod.id} - {prod.nome} - R$ {prod.preco} {/*Aqui novamente chamando os nomes dos atributos que dei aos objetos la na lista produtos */}
            </li>
        })

    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )

}