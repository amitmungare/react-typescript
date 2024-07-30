import React from 'react'

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
    return (
        <li>{props.text} <span onClick={props.onRemoveTodo}>X</span></li>
    )
}

export default TodoItem