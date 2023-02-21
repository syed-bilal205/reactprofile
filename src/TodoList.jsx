import React, { useState } from "react";

const  TodoList =  () => {

    const [inputList , setInputList] = useState('');
    const [items , setItem] = useState([]);

    const item = (event) => {
        setInputList(event.target.value)
    }

    const listOfItem = () => {
        if(inputList===''){
            alert("Please Enter A Valid Value");
        }else{
        setItem((oldItems) => {
             return [...oldItems, inputList];
 
        });
        }
        setInputList('')
    }

    return (
        <>
        <div>
            <div>
                <h1>ToDo List</h1>
                <br/>
                <input type='text' placeholder="Enter Your List" value={inputList} onChange={item}/>
                <br/>
                <br/>
                <button onClick={listOfItem}>+</button>
                <br/>
                <ol>
                    {/* <li>{inputList}</li> */}
                </ol>
            </div>
        </div>
{
        items.map((itemVal) => {
         return <li>{itemVal}</li>   
        })}

        </>
    )
}

export default TodoList