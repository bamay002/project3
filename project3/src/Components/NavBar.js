import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import NotFound from './NotFound';
import '../images/chisme-logo.png'
import '../css/NavBar.css'

export default function NavBar(){

    useEffect(() => {
      fetch('http://localhost:2222/profile' , {
        credentials: 'include',
      })
    }, [])

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


      <Nav.Item className='navbar-si'>
        <Link to='/signUp'>
          <Nav.Link href='/signup' eventKey={'signUpPage'}>
            Sign Up
          </Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item className='navbar-su'>
        <Link to='/signIn'>
          <Nav.Link href='/signin' eventKey={'signInPage'}>
            Sign In
          </Nav.Link>
        </Link>
      </Nav.Item>

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
 