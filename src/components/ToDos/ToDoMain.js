import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import instance from "../env";
const { default: NewToDo } = require("./NewToDo");

function ToDoMain({setloggedIn}){
    const [userName, setuserName] = useState('')
    const [toDoList, setToDoList] = useState([]);
    const [toDoName, setToDoName] = useState('');

    useEffect(()=> {
        setuserName(localStorage.getItem("firstName"))
        instance.get('/todos', {
            params: {
              userId: localStorage.getItem('userId')
            }})
        .then(res => {
            console.log(res)
            setToDoList(res.data.todoList)
        })
            .catch(error => "Greska: "+ error)
    },[])

    const addNewTodo = () => {
        instance.post('/todos',
        {newTodo: {
            name : toDoName,
            isFinished: 0,
            user_id: localStorage.getItem('userId')}})
        .then(res => {
            
            setToDoList([...toDoList, res.data.newTodo])
            setToDoName('')
        })
        .catch(error => 'Greska: '+ error)
    }


    const logout = () => {
        setloggedIn(false)
        localStorage.clear()
    }

    let todos;
    if(setToDoList) {
        console.log("pre mape: ", toDoList)
        todos = toDoList.map((todo, index) => {
            return <ToDo todo={todo} id={index + 1}/>
        })
    }

    return(
        <div>
            <div className="welcome">Welcome {userName}</div>
            <h2 className="todo">ToDo List:</h2>
            {todos}
            <NewToDo name={toDoName} setName={setToDoName}/>
            <div className="row my-2">
                <div className="col-6">
                <button className="btn btn-success w-100" onClick={addNewTodo}>Dodaj</button>

                </div>
                <div className="col-6">
            <button className="btn btn-danger w-100" onClick={logout}>Odjavi se</button>

            </div>
            </div>

          
        </div>
    );
}

export default ToDoMain;