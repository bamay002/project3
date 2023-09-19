
import '../css/SignIn.css'
import '../images/chisme-logo.png'

export default function SignIn(){
    return (
        <body className="box">
            <h1>Sign In</h1>

            <form>
                <div className="imagecontainer">
                    <img className="logo-image" src="https://assets-jpcust.jwpsrv.com/thumbnails/u6e0g7ki-720.jpg"  alt='chisme logo' />
                </div>

                <div className="container">
                    <label for='username'>
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label for='password'>
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <button type="submit">Login</button>

                    <label className="remem">
                        <input type="checkbox" name='remember' />
                            Remember me
                    </label>
                </div>

                <div className="container">
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