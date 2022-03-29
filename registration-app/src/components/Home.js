import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";






const Home=()=>{
 
   
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
 
    const {users} = useParams();  
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000";
    const [categoria, setUser] = useState({nombre: "",slug: "",descripcion: "",created_at:"",updated_at:""});
             //  cat.push(  setUser({ ...categoria, nombre:x.nombre,slug: x.slug,descripcion:x.descripcion,created_at:x.created_at,updated_at:x.updated_at}));

  

    const usersss = localStorage.getItem('username');
    async function categorias() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.get("api/categorias", categoria).then((res) => {
          console.log(res);
        });
   
      });
    }
    
        
    return(
        <div className="container text-align-cener justify-content-center" >
             <div style={{  float:"right",marginRight:"50px"}}>
                           
          {   categorias()}
            </div>
            <h4 style={{textAlign:"left",marginLeft:"10px"}}>Bienvenido : <span style={{color:"blue"}}>{usersss}</span></h4>
            <h2 style={{color:"green"}}>Tienda online </h2>
            <div  container direction="row" justify="center" alignItems="center">
            <p>
            La industria del deporte constituye un negocio muy amplio que abarca desde la venta de alimentos y souvenirs deportivos hasta la venta de derechos de difusión y los acuerdos de patrocinio. En esta industria hay numerosas partes interesadas, desde los clubes, las ligas y los patrocinadores a los organismos de radiodifusión y, por supuesto
          
         </p>
 

        </div>
        </div>

    )
}
 
export default Home