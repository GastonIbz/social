import React from 'react'
import "./profilerightbar.css"
import image1 from "../Images/Contact.png";
import image2 from "../Images/Contact2.png";
import image3 from "../Images/Contact6.png";
import image4 from "../Images/Contact7.png";
import addFriends from "../Images/Adduser.png"
import Add from "../Images/Profile2.png"
import Add2 from "../Images/Post8.png"
import Add3 from "../Images/Post5.png"
import Add4 from "../Images/Profile7.png"
import Add5 from "../Images/Post6.png"

export default function ProfileRightbar() {
  return (
    <div className='profilerightbar'>
      <div className='profilerightcontainer'>
        <h3>Solicitudes de Contacto</h3>
 <div>
  <div>
  <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer"}}>
  <img src={`${image1}`} className="Contactimage" alt=""/>
  <p style={{textAlign:"start", marginLeft:10}}>Faqu quiere contactarte</p>
  </div>
  <div style={{display:"flex", justifyContent:"space-around"}}>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Aceptar</button>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Rechazar</button>
  </div>
  </div>
  <div>
  <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer"}}>
  <img src={`${image2}`} className="Contactimage" alt=""/>
  <p style={{textAlign:"start", marginLeft:10}}>Manu quiere contactarte</p>
  </div>
  <div style={{display:"flex", justifyContent:"space-around"}}>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Aceptar</button>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Rechazar</button>
  </div>
  </div>
  <div>
  <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer"}}>
  <img src={`${image3}`} className="Contactimage" alt=""/>
  <p style={{textAlign:"start", marginLeft:10}}>xAguz quiere contactarte</p>
  </div>
  <div style={{display:"flex", justifyContent:"space-around"}}>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Aceptar</button>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Rechazar</button>
  </div>
  </div>
  <div>
  <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer"}}>
  <img src={`${image4}`} className="Contactimage" alt=""/>
  <p style={{textAlign:"start", marginLeft:10}}>Ganamis2 quiere contactarte</p>
  </div>
  <div style={{display:"flex", justifyContent:"space-around"}}>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Aceptar</button>
    <button style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"#043601",color:"white", borderRadius:"10px"}}>Rechazar</button>
  </div>
  </div>

 </div>
      </div>
      <div className='rightcontainer2'>
     <h3 style={{textAlign:"start", marginLeft:"15px", paddingTop:"15px"}}> Sugeridos para vos</h3>
     <div style={{margintop:"10px"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:"center"}}>
        <img src={`${Add}`} className="ProfileImage" alt=""/>
        <div>
        <p style={{marginLeft:"10px", textAlign:'start'}}>Busta</p>
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Entrenador de Equipo - CS:GO</p>
        </div>
        </div>
        <div style={{backgroundColor:"#303130", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfriend" alt=""/>
        </div>
      </div>
     </div>
     <div style={{margintop:"-10px"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:"center"}}>
        <img src={`${Add2}`} className="ProfileImage" alt=""/>
        <div>
        <p style={{marginLeft:"10px", textAlign:'start'}}>Jvra</p>
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Reclutador de jugadores</p>
        </div>
        </div>
        <div style={{backgroundColor:"#303130", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfriend" alt=""/>
        </div>
      </div>
     </div>
     <div style={{margintop:"-10px"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:"center"}}>
        <img src={`${Add3}`} className="ProfileImage" alt=""/>
        <div>
        <p style={{marginLeft:"10px", textAlign:'start'}}>Zhev4</p>
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Jugador de Valorant</p>
        </div>
        </div>
        <div style={{backgroundColor:"#303130", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfriend" alt=""/>
        </div>
      </div>
     </div>
     <div style={{margintop:"-10px"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:"center"}}>
        <img src={`${Add4}`} className="ProfileImage" alt=""/>
        <div>
        <p style={{marginLeft:"10px", textAlign:'start'}}>Monessy</p>
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Jugador de Counter-Strike</p>
        </div>
        </div>
        <div style={{backgroundColor:"#303130", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfriend" alt=""/>
        </div>
      </div>
     </div>
     <div style={{margintop:"-10px"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:"center"}}>
        <img src={`${Add5}`} className="ProfileImage" alt=""/>
        <div>
        <p style={{marginLeft:"10px", textAlign:'start'}}>Dass</p>
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Dueño de equipo</p>
        </div>
        </div>
        <div style={{backgroundColor:"#303130", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfriend" alt=""/>
        </div>
      </div>
     </div>
      </div>
    </div>
    
  )
}
