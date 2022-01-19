import { useEffect, useState } from "react";
import Login from "../Login/Login";
import ToDoMain from "../ToDos/ToDoMain";

function Box(){
    const [loggedIn, setloggedIn] = useState(false)
    useEffect(() => {
        console.log(loggedIn)
        const userId = localStorage.getItem("userId")

        if(userId != undefined) {
            setloggedIn(true)
        }
    })
    return(
        <div>
            
            {loggedIn ? <ToDoMain setloggedIn={setloggedIn}/> : <Login setloggedIn={setloggedIn}/>}    
        </div>
    );
}
export default Box;