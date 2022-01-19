import React, {useState} from 'react'
import '../../App.css'
import instance from '../env';
import {Link} from 'react-router-dom';
import './Login.css'

function Login({setloggedIn}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setmessage] = useState('')

    const logIn = () => {
        instance.post('/login',
        {user: {email: email, password: password}})
        .then(res => {
            console.log(res)
            if(res.data.message)
                setmessage(res.data.message)

            if(res.data.loged == true){
                setloggedIn(true)
                localStorage.setItem("userId", res.data.user.user_id)
                localStorage.setItem("firstName", res.data.user.firstName)
            }

        })
        .catch(error => console.log('Greska: '+ error))
    }

    return (
        <div>
            <div className='text-center login_style'>Log in</div>
            <input type="text" placeholder='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder='password' className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
            {message && <div className="alert alert-danger">{message}</div>}
            <div className='text-center'>
                <button className="btn btn-primary mt-2 " style={{width: '50%'}} onClick={logIn}>Submit</button>

            </div>

            <div className="text-center my-2">
                You don't have account? <Link to="/SignUp" ><span >SignUp</span></Link>
            </div>
        </div>
    )
}
 
export default Login;