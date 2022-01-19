import React from "react";

function NewToDo({name, setName}){
    return(
        <div>
            <input 
            value={name}
            className="form-control"
            placeholder="Unesite novi task"
            onChange={(e) => setName(e.target.value)}>
            </input>
        </div>
    );
}

export default NewToDo;