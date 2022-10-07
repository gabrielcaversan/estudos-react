import './Card.css'
import React from "react";

export default props =>
    <div className="Card">
        <div className="Conteudo">
            {props.children} {/* O children irá renderizar aquilo que eu passo dentro da minha tag Card lá no index.js ou App.jsx */}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>