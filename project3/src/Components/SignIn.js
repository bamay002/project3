
import '../css/SignIn.css'
import '../images/chisme-logo.png'

export default function SignIn(){
    return (
        <body className="box">
            <h2>Sign In</h2>

            <hr />
            <form>

                <div className="container">
                    <label for='username'>
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label for='password'>
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <button className='butt-si' type="submit">Login</button>

                    <label className="remem">
                        <input type="checkbox" name='remember' className='rem'/>
                           Remember me
                    </label>
                </div>

                <div className="bott-container">
                    <span className="notmem">
                        Not a member? <a href="./SignUp" className="a-sign-in">Sign Up</a> 
                    </span>

                    <span className="forgotpass">
                        Forgot <a href="#" className="a-sign-in"> password?</a>
                    </span>
                </div>

            </form>
        </body>
    )
}