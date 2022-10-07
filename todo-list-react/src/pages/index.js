//Ao adicionar { useState }, permite trabalhar com os estados e ele retorna o ultimo valor. Serve para alterar o estado da aplicação para conseguir inserir o valor em uma lista.
import React, { useState } from "react";
import List from '../components/list'



function Todo() {
  //Você cria uma variavel e uma função que vai incrementar essa variavel, e ai passa o estado inicial. Assim você tem um primeiro gerenciamento do estado usando Hooks.
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  //Essa função é para o input. Recebe um evento que é de quando a pessoa clicar.
  function handlerChangeInput(event) {
    const task = event.target.value;
    //Aqui a função setTask ela está de forma discreta e aí faço a passagem do valor do task. Agora task recebe um valor e ai atualiza o valor na função.
    setTask(task);
  }

  //Função para adicionar itens na lista.
  function handlerAddItemToList(event) {
    event.preventDefault();
    //Verifica se tem uma task válida
    if(task != '') {
      //Operador spread (...), é como se ele tivesse listando tudo que tem na lista. Coloca ...nomeDaLista e aí em seguida o nome do item que você vai incluir.
      setList([...list, task]);
    }

    //Função para limpar o campo do input quando clicar em inserir. Para funcionar precisa ter um value no input com a variavel que esta recebendo os valores, no caso, a task.
    setTask('');
  }

  return (
    <div className="todo-wrapper">

      <h1>Todo List</h1>

      <form>
        <input
          type='text'
          placeholder="Incluir nova tarefa"
          value={task}
          onChange={handlerChangeInput} //Ou seja, quando começar a alterar o valor desse campo, ele vai chamar o método e adicionar o valor na variavel task.
        />
        <button 
          type='submit'
          onClick={handlerAddItemToList}
          >Inserir</button>
      </form>

      <List list={list}/>

    </div>
  );
};

export default Todo;

/* Outra maneira de colocar o código das functions usando arrow function: 

function Todo() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handlerChangeInput = (event) => setTask(event.target.value);

  const handlerAddItemToList = (event) => {
    event.preventDefault();
    if(taks != '') {
      setList([...list, task]);
    }
    setTask('');
  }

  return (
    Se mantém a mesma coisa...
  )

*/