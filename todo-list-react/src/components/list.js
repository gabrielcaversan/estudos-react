import React from "react";

export default function List(props) {
    return (
        <ul className="todo-list">
            {/*Comportamento para ele pegar a lista e gerar: */}
            {props.list.map(item => (<li>{item}</li>))}
        </ul>
    );
};

