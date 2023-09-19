import '../css/SignUp.css'

export default function SignUp(){
    return (
        <form action="" className='page-su'>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account with us ! :)</p>
                <hr />

                <label for='username'><b>Username</b></label>
                <input type='text' placeholder='Enter Username' name='username' required/>

                <label for='psw'><b>Password</b></label>
                <input type='password' placeholder='Enter Password' name='psw' required />

                <label for='psw-repeat'><b>Repeat Password</b></label>
                <input type='password' placeholder='Repeat Password' name='psw-repeat' required/>

                <p>By creating an account you agree to our <a href='#'> Terms & Privacy </a>.</p>

                <div className='clearfix'>
                    <button type='button' className='cancelbtn'>Cancel</button>
                    <button type='submit' className='signupbtn'>Sign Up</button>
                </div>
            </div>
        </form>
    )
}