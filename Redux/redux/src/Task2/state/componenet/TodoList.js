
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // Remove task
  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTodoList(todoList.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTask(task.id)}>Mark as {task.completed ? 'Incomplete' : 'Complete'}</button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
