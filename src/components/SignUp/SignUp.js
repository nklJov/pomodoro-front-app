import './SignUp.css'
import { useState } from "react";
import instance from '../env'
import { Link, useNavigate } from "react-router-dom";

function SignUp(){
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submit = () => {
        instance.post('/createUser',
        {user: {
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        }})
        .then((response)=>{

            if(response.data.message)
            navigate('/')

        })
        .catch((error)=>console.log('Greska prilikom kreiranja novog korisnika.',error))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pomodoro my-5">
                    <div className='row'>
                        <div className='col-6 my-4 mx-auto'>
                            
                       
                            <div className="form-group my-2">
                                <label>Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control"  placeholder="Password"/>
                            </div>

                            <div className="form-group my-3">
                                <label>First Name</label>
                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control"  placeholder="First Name"/>
                            </div>

                            <div className="form-group my-3">
                                <label>Last Name</label>
                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control"  placeholder="Last Name"/>
                            </div>
                            
                            <button onClick={submit}  className="btn btn-danger my-4">Submit</button>
                            <Link to="/"><button className="btn btn-success my-4 homeButton">Home Page</button></Link>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;