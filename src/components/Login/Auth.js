import React from 'react'
import Login from './Login'


function Auth({setisLogedIn}) {
    return (
        <div className='col-3 text-center apiDiv'>
            <Login setisLogedIn={setisLogedIn}/>
            

        </div>
    )
}

export default Auth