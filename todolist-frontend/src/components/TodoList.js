import React from 'react';

const TodoList = ({ todos, completeTask, editTask, deleteTask, isCompletedList, isDeletedList }) => {
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index} className="todo">
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
                    <div>
                        <small>Added: {formatDate(todo.createdAt)}</small>
                        {todo.updatedAt && todo.updatedAt !== todo.createdAt && (
                            <small> | Updated: {formatDate(todo.updatedAt)}</small>
                        )}
                    </div>
                    {!isDeletedList && (
                        <>
                            {!isCompletedList && (
                                <>
                                    <button onClick={() => completeTask(index)}>Done</button>
                                    <button onClick={() => editTask(index)}>Edit</button>
                                </>
                            )}
                            {isCompletedList && (
                                <>
                                    <button onClick={() => completeTask(index)}>Undo</button>
                                </>
                            )}
                            <button onClick={() => deleteTask(index, isCompletedList)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodoList;