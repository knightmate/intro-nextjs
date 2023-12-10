'use client'

import { defaultMaxListeners } from "events";
import React from "react";

const NewtodoList=()=>{

    const [todos,settodo]=React.useState();

    const onSubmit=(event:any)=>{
 
         console.log('form',event.currentTarget)

         event.preventDefault();


    }

return (
     <form onSubmit={onSubmit}>
     <input type="text"></input>
     <input type="submit" ></input>
      </form>  
)
}

export default NewtodoList