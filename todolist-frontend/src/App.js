import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [deletedTodos, setDeletedTodos] = useState([]);

    const addTask = (text) => {
        setTodos([...todos, { text, completed: false, createdAt: new Date(), updatedAt: new Date() }]);
    };

    const completeTask = (index) => {
        const newTodos = [...todos];
        const [completedTask] = newTodos.splice(index, 1);
        completedTask.completed = true;
        completedTask.updatedAt = new Date();
        setTodos(newTodos);
        setCompletedTodos([...completedTodos, completedTask]);
    };

    const undoCompleteTask = (index) => {
        const newCompletedTodos = [...completedTodos];
        const [taskToUndo] = newCompletedTodos.splice(index, 1);
        taskToUndo.completed = false;
        taskToUndo.updatedAt = new Date();
        setCompletedTodos(newCompletedTodos);
        setTodos([...todos, taskToUndo]);
    };

    const editTask = (index, isCompleted = false) => {
        if (!isCompleted) {
            const newText = prompt("Edit task:");
            if (newText) {
                const newTodos = [...todos];
                newTodos[index].text = newText;
                newTodos[index].updatedAt = new Date();
                setTodos(newTodos);
            }
        }
    };

    const deleteTask = (index, isCompleted = false) => {
        if (isCompleted) {
            const newCompletedTodos = [...completedTodos];
            const [deletedTask] = newCompletedTodos.splice(index, 1);
            setCompletedTodos(newCompletedTodos);
            setDeletedTodos([...deletedTodos, deletedTask]);
        } else {
            const newTodos = [...todos];
            const [deletedTask] = newTodos.splice(index, 1);
            setTodos(newTodos);
            setDeletedTodos([...deletedTodos, deletedTask]);
        }
    };

    return (
        <div className="container">
            <h1>TodoInput</h1>
            <TodoInput addTask={addTask} />

            <h1>TodoList</h1>
            <h2>To Do</h2>
            <TodoList
                todos={todos}
                completeTask={completeTask}
                editTask={editTask}
                deleteTask={deleteTask}
                isCompletedList={false}
            />
            <h2>Completed</h2>
            <TodoList
                todos={completedTodos}
                completeTask={undoCompleteTask}
                deleteTask={deleteTask}
                isCompletedList={true}
            />
            <h2>Deleted</h2>
            <TodoList
                todos={deletedTodos}
                isDeletedList={true}
            />
        </div>
    );
};

export default App;