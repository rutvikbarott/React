
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';

const AddTask = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() === '') return; 

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };

    setTodoList([...todoList, newTask]);
    setNewTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
