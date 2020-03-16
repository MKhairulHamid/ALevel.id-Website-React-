import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar, Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { Logout } from '../Redux/Actions';



const HeaderBar = () => {

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const logOut = () => {
      dispatch(Logout())
      localStorage.removeItem('token')
  }

  return ( 
      <Navbar className="bg-light" expand="md">
          <Navbar.Brand href="/">
              <Feather
                  name='target'
                  color='#39bbdb'
                  size={40}
                  // style={{}}
              />
              
              ALevel.id
          </Navbar.Brand> 
          <Nav className="mr-auto">
              <Nav.Link href="/courses"> Courses </Nav.Link>
              <Nav.Link href="#features"> Exams Schedule </Nav.Link>
              <Nav.Link href="#pricing"> Learning Resources </Nav.Link>
          </Nav>

              { user.token? 
                <DropdownButton title={user.firsName} drop="left" variant="secondary">
                    <Dropdown.Item > My Courses </Dropdown.Item>
                    <Dropdown.Item> Transaction </Dropdown.Item>
                    <Dropdown.Item> Edit Profile </Dropdown.Item>
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