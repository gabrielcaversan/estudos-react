import React from "react";

export default props =>
    <div>
        <h2>Os filhos</h2>
        <div>
            {props.children} {/* O children irá renderizar aquilo que eu passo dentro da minha tag Card lá no index.js */}
        </div>
    </div>