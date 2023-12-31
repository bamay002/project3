import { useContext, useState } from 'react'
import '../css/SignIn.css'
import '../images/chisme-logo.png'
import { Navigate } from 'react-router-dom'
import React from 'react'
import { UserContext } from '../UserContext'


export default function SignIn(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext)

    async function signin(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:2222/signin', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });

        if (response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        } else {
            alert('wrong credentials')
        }
    }

    if (redirect){
        return <Navigate to={'/'} />
    }

    return (
        <body className="box">
            <h2>Sign In</h2>

            <hr />
            <form onSubmit={signin}>

                <div className="container">
                    <label for='username'>
                        <b>Username</b>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        value={username} 
                        onChange={ev => setUsername(ev.target.value)} 
                        required />

                    <label for='password'>
                        <b>Password</b>
                    </label>
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        value={password} 
                        onChange={ev => setPassword(ev.target.value)} 
                        required />

                    <button className='butt-si' type="submit">Login</button>

                    <label className="remem">
                        <input type="checkbox" name='remember' className='rem'/>
                           Remember me
                    </label>
                </div>

                <div className="bott-container">
                    <span className="notmem">
                        Not a member? <a href="./signup" className="a-sign-in">Sign Up</a> 
                    </span>

                    <span className="forgotpass">
                        Forgot <a href="#" className="a-sign-in"> password?</a>
                    </span>
                </div>

            </form>
        </body>
    )
}