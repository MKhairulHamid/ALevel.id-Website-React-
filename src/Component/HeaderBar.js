import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar, Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { Logout } from '../Redux/Actions';
import Logo from '../Public/Assets/LogoALevel.png'



const HeaderBar = () => {

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const logOut = () => {
      dispatch(Logout())
      localStorage.removeItem('token')
  }

  return ( 
      <Navbar className="bg-light" expand="md">
          <Navbar.Brand href='/'>
            <img
              src={Logo}
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="ALevel"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/courses"> All Courses </Nav.Link>
              <Nav.Link href="#features"> Exams Schedule </Nav.Link>
              <Nav.Link href="#pricing"> Learning Resources </Nav.Link>
          </Nav>

              { user.token? 
                <DropdownButton title={user.firsName} drop="left" variant="outline-primary">
                    {user.role==='admin'? <Dropdown.Item href="/manage-courses" > Manage Courses </Dropdown.Item> : "" }
                    <Dropdown.Item > My Courses </Dropdown.Item>
                    <Dropdown.Item> Enrollment </Dropdown.Item>
                    <Dropdown.Item> My Profile </Dropdown.Item>
                    <Dropdown.Item onClick={logOut}> Log Out</Dropdown.Item>

                </DropdownButton>
              : 
                <Nav className="justify-content-center">
                  <Button href="/login" variant="outline-primary">Login</Button>
                  <Button href="/register" variant="outline-primary">Register</Button>
                </Nav>
              }
              
          
  </Navbar>
     );
  }

 
export default HeaderBar;