import '../css/SignUp.css'
import { useState } from 'react'
import React from 'react'

export default function SignUp(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function signup(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:2222/signup', {
            method: 'POST',
            body: JSON.stringify({username , password}),
            headers: {'Content-Type':'application/json'},
        });
        
        if (response.status === 200){
            alert('resgiration successful')
        } else {
            alert('registration failed')
        }

    }

    return (
        <form action='' className='page-su' onSubmit={signup}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account with us ! :)</p>
                <hr />

                <label htmlFor='username'><b>Username</b></label>
                <input 
                type='text' 
                placeholder='Enter Username' 
                value={username}
                onChange={ev => setUsername(ev.target.value)}
                required/>

                <label htmlFor='password'><b>Password</b></label>
                <input 
                type='password' 
                placeholder='Enter Password' 
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                required />

                <p>By creating an account you agree to our <a className='terms' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' > Terms & Privacy </a>.</p>

                <div className='clearfix'>
                    <button type='button' className='cancelbtn'><a className='cancelback' href='/'>Cancel</a></button>
                    <button type='submit' className='signupbtn'>Sign Up</button>
                </div>
            </div>
        </form>
    )
}