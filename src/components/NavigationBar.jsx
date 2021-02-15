import React from 'react'
import { Navbar, Nav, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import '../App.css';
import HotelTable from './HotelTable';
import LoginPage from './LoginPage'

export default class NavigationBar extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="Login">Courtesy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="Rooms" >Rooms</Nav.Link>
                                <Nav.Link onClick={House} href="House" >House</Nav.Link>
                                <NavDropdown title="Request" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Housekeeper</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Repair</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Manager</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Emergency</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <NavDropdown title="Schedule" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Representative</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Housekeeper</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Maintenance</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav>
                                <DropdownButton
                                    menuAlign="right"
                                    title="User"
                                    id="dropdown-menu-align-right"
                                >
                                    <Dropdown.Item eventKey="1">Logout</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Account Details</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Benefits Portal</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Time Clock</Dropdown.Item>
                                </DropdownButton>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar >
                </Router>

                <Switch>
                    <Route path="/Rooms">
                        <Rooms />
                    </Route>
                    <Route path="/House">
                        <House />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        )
    }
    
}
function Rooms() {
    return <HotelTable />;
  }
  
  function House() {
    return <h2>HouseKeepers and their tasks for the day</h2>;
  }

  function Login() {
    return <LoginPage />;
  }