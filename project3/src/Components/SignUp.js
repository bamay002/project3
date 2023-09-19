import '../css/SignUp.css'
import { useState } from 'react'

export default function SignUp(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(ev){
        ev.preventDefault()
        await fetch('http://localhost:2222/signup' , {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type' : 'application/json'}
        })
    }

    return (
        <form action='' onSubmit={register} className='page-su'>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account with us ! :)</p>
                <hr />

                <label for='username'><b>Username</b></label>
                <input 
                type='text' 
                placeholder='Enter Username' 
                value={username} 
                onChange={ev => setUsername(ev.target.value)} 
                required/>

                <label for='password'><b>Password</b></label>
                <input 
                type='password' 
                placeholder='Enter Password' 
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                required />

                <p>By creating an account you agree to our <a href='#'> Terms & Privacy </a>.</p>

                <div className='clearfix'>
                    <button type='button' className='cancelbtn'>Cancel</button>
                    <button type='submit' className='signupbtn'>Sign Up</button>
                </div>
            </div>
        </form>
    )
}