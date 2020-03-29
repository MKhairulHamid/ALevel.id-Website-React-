import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Logout, fetchEnrollmentById, fetchUnpaidEnrollment, fetchPaidEnrollment, fetchMyCourses } from '../Redux/Actions';
import Logo from '../Assets/Image/LogoALevel.png'



const HeaderBar = () => {

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const logOut = () => {
      dispatch(Logout())
      localStorage.removeItem('token')
  }
  var username = `${user.firstName} ${user.lastName}`

  return ( 
      <Navbar position='absolute' className="bg-light" expand="md">
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
              <Nav.Link href="/examsschedule"> Exams Schedule </Nav.Link>
              <Nav.Link href="#pricing"> Learning Resources </Nav.Link>
          </Nav>

              { user.token? 
                <DropdownButton title={username} drop="left" variant="outline-primary">
                    {user.role==='admin'? <Dropdown.Item> -- Menu Admin -- </Dropdown.Item> : "" }
                    {user.role==='admin'? <Dropdown.Item href="/dashboard" onClick={dispatch(fetchPaidEnrollment())}> Admin Dashboard </Dropdown.Item> : "" }
                    {user.role==='admin'? <Dropdown.Item href="/confirm-payment"  onClick={dispatch(fetchUnpaidEnrollment())}> Confirm Payment </Dropdown.Item> : "" }
                    {user.role==='admin'? <Dropdown.Item href="/manage-courses" > Manage Courses </Dropdown.Item> : "" }
                    {user.role==='admin'? <Dropdown.Item> -- Menu User -- </Dropdown.Item> : "" }

                    <Dropdown.Item href="/mycourses" onClick={dispatch(fetchMyCourses(user.id))}> My Courses </Dropdown.Item>
                    <Dropdown.Item href="/enrollment" onClick={dispatch(fetchEnrollmentById(user.id))} > My Enrollment </Dropdown.Item>
                    <Dropdown.Item href="/myprofile"> My Profile </Dropdown.Item>
                    <Dropdown.Item href="/" onClick={logOut}> Log Out</Dropdown.Item>
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