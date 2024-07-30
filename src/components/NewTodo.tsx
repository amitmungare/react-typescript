import React, { useContext, useRef } from 'react'
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value; // ! means the value wont be null

        if(enteredText.trim().length===0){
            return
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo