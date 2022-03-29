import React,{ Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import {Navbar, Nav,Container,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

const btnstyle={margin:'8px 0',background:'red' }

function Header (){




  
  let navigate  = useNavigate(); 
  var sesiones="";

  const logout = () => 
  {
    localStorage.removeItem("username");
    localStorage.removeItem("toke");

   navigate("/Login");
  }
    if(localStorage.getItem('toke')){
      sesiones=(
      <Button type='submit' onClick={logout} color='primary' justifyContent="flex-end" variant="contained" style={btnstyle} >Salir</Button>
      )
    }else{
      sesiones=("");


    }
   
   

return (
<div>
<Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Fitness One Time</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
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
        <Button variant="contained" size="lg" active>Buscar</Button>
      </Form>
        {sesiones}
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
);
}
 
export default Header