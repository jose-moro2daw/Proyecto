import React from 'react'
import { Grid,Paper, Avatar,Box,Link, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { Carousel } from 'react-bootstrap';

const Home=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
 
    const {users} = useParams();  
 
 
    const usersss = localStorage.getItem('username');
    console.log(usersss)
      
 

 
    return(
        <div className="container text-align-cener justify-content-center">
          <Header/>
           <Grid>
             <div style={{  float:"right",marginRight:"50px"}}>
                           
             
            </div>
          </Grid>            
            <h4 style={{textAlign:"left",marginLeft:"10px"}}>Bienvenido : <span style={{color:"blue"}}>{usersss}</span></h4>
            <h2 style={{color:"green"}}>Tienda online </h2>
            <Grid  container direction="row" justify="center" alignItems="center">
            <p>
            La industria del deporte constituye un negocio muy amplio que abarca desde la venta de alimentos y souvenirs deportivos hasta la venta de derechos de difusión y los acuerdos de patrocinio. En esta industria hay numerosas partes interesadas, desde los clubes, las ligas y los patrocinadores a los organismos de radiodifusión y, por supuesto
          
         </p>

         </Grid>

        </div>
    )
}
 
export default Home