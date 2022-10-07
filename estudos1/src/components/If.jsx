//Apesar de ser uma função anonima, é na hora de importar que eu defino o nome dela.
//Não preciso importar o React pois não tenho código JSX dentro desse arquivo.

export default function (props) {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}