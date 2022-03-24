import React,{ Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import {Navbar, Nav,Container,NavDropdown,Form,FormControl} from 'react-bootstrap';

function Header (){

return (
<div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Tienda Online</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/Home">Home</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
     
      </Nav>
      <Form className="d-flex offset-md-7">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
        />
        <Button variant="primary" size="lg" active>Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
);
}
 
export default Header