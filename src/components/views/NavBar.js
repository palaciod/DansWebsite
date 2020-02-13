import react from "react";
import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


export class MyNav extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            {/* <Nav.Link href="/">Blogs</Nav.Link>
                            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">iOS Development</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Web Development</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://github.com/palaciod?tab=repositories">GitHub</Nav.Link>
                            <Nav.Link eventKey={2} href="https://www.linkedin.com/in/daniel-palacio-6b6b54183?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BB2%2BRWS5cS266bEOIaUENPw%3D%3D">
                            linkedin
                             </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default MyNav;