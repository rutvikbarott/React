import React from "react";
import Counter from "./Task 01/components/Counter";
import { RecoilBridge, RecoilRoot } from "recoil";
import AddTask from "./Task2/state/componenet/AddTask";
import TodoList from "./Task2/state/componenet/Todolist";



function App() {
  return (
    <RecoilRoot>
    <div className="App">
    <h1>Todo List with Recoil</h1>
   {/* <Counter/> */}
   <AddTask/>
   <TodoList/>


    </div>
    </RecoilRoot>
  );
}

export default App;
