'use client'

import { todo } from "node:test";
import React from "react";

const TodoList=({todos})=>{

    
return (
    <>
    {
        todos.map((todo)=>{
            return <h1>{todo}</h1>
        })
    }
    </> 
)
}

export default TodoList