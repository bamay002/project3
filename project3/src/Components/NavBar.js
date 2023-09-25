import React, { useContext, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import NotFound from './NotFound';
import '../images/chisme-logo.png'
import '../css/NavBar.css'
import { UserContext } from '../UserContext';

export default function NavBar(){

  const {setUserInfo,userInfo} = useContext(UserContext);
  
  useEffect(() => {
    fetch('http://localhost:2222/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:2222/signout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo ? userInfo.username : undefined;

    return(
    <>
      <Navbar>
<div>
  <Nav defaultActiveKey='/' variant='tabs' fill className='navvy'>

      <Nav.Item className='navbar-logo'>
        <Link to='/'>
          <Nav.Link href='/'>
            <img className='logo' src="https://assets-jpcust.jwpsrv.com/thumbnails/u6e0g7ki-720.jpg"  alt='chisme logo' />
          </Nav.Link>
        </Link>
      </Nav.Item>

        {username && (
          <>
          <Nav.Item className='navbar-si'>
              <Link to='/create'>
                <Nav.Link href='/create' eventKey={'createPage'}>
                  Create New Post
                </Nav.Link>
              </Link>
          </Nav.Item>

          <Nav.Item className='navbar-su'>
              <a onClick={logout}>Logout</a>
          </Nav.Item>

          <Nav.Item className='navbar-cr'>
              <p>Welcome Back {username}</p>
          </Nav.Item>
          </>
        )}
        {!username && (
          <>
            <Nav.Item className='navbar-si'>
              <Link to='/signup'>
                <Nav.Link href='/signup' eventKey={'signUpPage'}>
                  Sign Up
                </Nav.Link>
              </Link>
            </Nav.Item>
            
            <Nav.Item className='navbar-su'>
              <Link to='/signin'>
                <Nav.Link href='/signin' eventKey={'signInPage'}>
                  Sign In
                </Nav.Link>
              </Link>
            </Nav.Item>
          </>
        )}

  </Nav>
</div>

<Routes>
<Route path='/' element={<Home />} />
<Route path='/signUp' element={<SignUp />} />
<Route path='signIn' element={<SignIn />} />
<Route path='*' element={<NotFound />} />
</Routes>

</Navbar>
        </>
    )
}
 