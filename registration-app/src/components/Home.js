import React from 'react'
import { Grid,Paper, Avatar,Box,Link, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { Carousel } from 'react-bootstrap';

const Home=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
 
    const {users} = useParams();  
    let navigate  = useNavigate(); 
 
    const usersss = sessionStorage.getItem('usuario');
    console.log(usersss)
      
    const logout = () => 
    {
      sessionStorage.removeItem("usuario")
        
        navigate("/Login");
    }
 
    return(
        <div class="container text-align-cener justify-content-center">
          <Header/>
           <Grid>
             <div style={{  float:"right",marginRight:"50px"}}>
                           
               <Button type='submit' onClick={logout} color='primary' justifyContent="flex-end" variant="contained" style={btnstyle} fullWidth>Logout</Button>
             
            </div>
          </Grid>            
            <h4 style={{textAlign:"left",marginLeft:"10px"}}>Bienvenido : <span style={{color:"blue"}}>{usersss}</span></h4>
            <h2 style={{color:"green"}}>Tienda online </h2>
            <Grid  container direction="row" justify="center" alignItems="center">
            <p>
            La industria del deporte constituye un negocio muy amplio que abarca desde la venta de alimentos y souvenirs deportivos hasta la venta de derechos de difusión y los acuerdos de patrocinio. En esta industria hay numerosas partes interesadas, desde los clubes, las ligas y los patrocinadores a los organismos de radiodifusión y, por supuesto
            <Grid container direction="row" justify="center" alignItems="center">
            <Carousel>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
 
            </Grid>
         </p>

         </Grid>

        </div>
    )
}
 
export default Home