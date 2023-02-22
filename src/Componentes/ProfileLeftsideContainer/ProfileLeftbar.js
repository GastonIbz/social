import React from 'react'
import "./profileleftbar.css"
//Imagenes de Usuario //
import perfil from "../Images/perfil.png"
import image from "../Images/Profile6.png"
//Imagenes de Contactos //
import Contact from "../Images/Contact1.png"
import Contact2 from "../Images/Contact2.png"
import Contact3 from "../Images/Contact3.png"
import Contact4 from "../Images/Contact4.png"
import Contact6 from "../Images/Contact6.png"
import Contact7 from "../Images/Contact7.png"
import Contact8 from "../Images/Contact8.png"
import Contact9 from "../Images/Contact9.png"
import Contact10 from "../Images/Contact10.png"
import Contact11 from "../Images/Contact11.png"
import Contact12 from "../Images/Contact12.png"






export default function ProfileLeftbar() {
  return (
    <div className='profileleftbar'>
      <div className='NotificacionesContainer'>
      <img src={`${image}`} className="Profilepagecover"  alt="" />
<div style={{display:"flex", alignItems:"center", marginTop:-30}}>
  <img src={`${perfil}`} className="Profilepageimage"  alt="" />
  <div>
  <p style={{marginLeft:6, marginTop:30,color:"white", textAlign:"start"}}>NickName</p>
  <p style={{marginLeft:6, marginTop:-15,color:"white", textAlign:"start", fontSize:13}}>Jugador de Counter-Strike</p>
  </div>
</div>
<div style={{display:"flex", justifyContent:"space-between"}}>
  <p style={{color:"white", marginLeft:20, fontSize:"14px"}}>Visitas al Perfil</p>
  <p style={{color:"white", marginRight:50, fontSize:"14px", marginTop:15}}>2105</p>
</div>
<hr style={{marginTop:-10}}/>
<div style={{display:"flex", justifyContent:"space-between", marginTop:-20}}>
  <p style={{color:"white", marginLeft:20, fontSize:"14px"}}>Contactos</p>
  <p style={{color:"white", marginRight:50, fontSize:"14px", marginTop:15}}>+500</p>
</div>
<hr style={{marginTop:-10}}/>
<div style={{ marginTop:-20}}>
  <h5 style={{color:"white", marginLeft:10, fontSize:"14px", marginRight:30, marginTop:30, textAlign:"start"}}>Información del usuario</h5>
  <p style={{color:"white",  fontSize:"14px", marginTop:-20, textAlign:"start", marginLeft:"10px"}}>¡Hola! Soy Nicolas "NickName" Ibz, tengo 20 años y soy jugador de Counter-Strike. <br></br> En este momento me encuentro en busca de un nuevo equipo para participar de torneos, me caracterizo por mi capacidad para tomar decisiones precisas en momentos cruciales.
 <br></br> Soy un jugador de apoyo y busco asegurar que mi equipo se lleve la victoria. ¡Gracias por leer! <br></br>No dudes en contactarme a mi mail: NicknamePlayer@gmail.com <br></br> Cordóba - Argentina.</p>
</div>
<button style={{width:"100%", paddingTop:7, paddingBottom:8, border:"none", backgroundColor:"#043601", color:"white"}} >Editar Información</button>
    
    </div>
  
<div className='NotificacionesContainer'>
<h3>Mis Contactos</h3>
<div style={{display:"flex", justifyContent:"space-between"}}>
  <p style={{marginLeft:10}}>Contactos</p>
  <p style={{marginRight:10, color:"#aaa"}}>Ver todos</p>
  </div>
  <div style={{display:"flex", flexWrap:"wrap", marginLeft:8}}>
  <div style={{marginLeft:4}}>
    <img src={`${Contact6}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Athy</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact2}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Gushaba</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact3}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Naiz</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact4}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Reski</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact9}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>day0s</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Janter</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact7}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>xfloud</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact8}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Aida</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact3}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Zack</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact10}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Mey</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact11}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>Graviti</p>
  </div>
  <div style={{marginLeft:4}}>
    <img src={`${Contact12}`} className="friendsimage" alt=""/>
    <p style={{marginTop:-3}}>hoody</p>
  </div>
  </div>
</div>
</div>

  )
}
