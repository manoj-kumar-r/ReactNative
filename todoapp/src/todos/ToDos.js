import React from 'react';

const Todos = ({ todos, deleteToDo }) => {

    const toDoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id} onClick={() => { deleteToDo(todo.id) }}>
                    <span>{todo.content}</span>
                </div>
            );
        })
    ) : (
        <p className="center">No ToDo's Left</p>
    );

    return (
        <div className="todos collection">
            {toDoList}
        </div>
    );
}

export default Todos;