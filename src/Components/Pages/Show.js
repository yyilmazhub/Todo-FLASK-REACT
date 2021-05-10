import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Delete from '../Delete/Delete'
export const Show=()=>{
    const[todo, setTodo] = useState([])
    const{id} = useParams()
    useEffect(()=>{
        fetch(`/api/${id}`)
        .then(response=>response.json())
        .then(data => setTodo(data))
    },[id])

    return(
        <div>
            {todo.length > 0 && todo.map(data=><div key='id'>{data.content}</div>)}
            <Delete id ={id}></Delete>
            <hr></hr>
            <Link to='/'>Back to todo</Link>
        </div>

    )
}

export default Show;