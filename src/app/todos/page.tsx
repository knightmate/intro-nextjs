import NewtodoList from "@/components/NewTodoForm";
import TodoList from "@/components/TodoList";
import React from "react";


const getData=async()=>{
 const data=["Next.js","Not working ","working","Fine working"];

const waiting=await new Promise((resolve)=>{
  setTimeout(()=>resolve("done"),2000);
});
 
  return data;
 
  }

const TodosPage=async()=>{

  const todos=await getData();
 
  return (
    < div>
    Todos
    <TodoList todos={todos}/>
     </div>
  )


};

export default TodosPage;
