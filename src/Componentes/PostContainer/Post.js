import React, { useState } from 'react'
import "./post.css"
import ImagePerfil from "../Images/perfil.png"
import PostTorneo from "../Images/MoreIcon.png"
import LikeIcon from "../Images/like.png"
import ComentarioIcon from "../Images/comentario.png"
import CompartirIcon from "../Images/compartir.png"
import MoreIcon from "../Images/more.png"
import anotherlikeicon from "../Images/setLike.png"

export default function Post() {
  const[Like, setLike] = useState(LikeIcon);
  const[count, setCount] = useState(10);
  
  const handleLike=()=>{
    if(Like === LikeIcon) {
setLike (anotherlikeicon);
setCount(+1);
    } else {
      setLike(LikeIcon)
      setCount(count-1);
    }
  }
 
  return (
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ImagePerfil}`} className="PostImage" alt="" />
            <div>
            <p style={{ marginLeft: "5px", textAlign:"start" }}>Nickname</p>
            <p style={{fontSize:"12px", textAlign:"start", marginLeft:5,marginTop:-13,color:"#aaa"}}>Seguir a nickname</p>
            </div>
            <img src={`${MoreIcon}`} className="moreicono" alt="" />
          </div>
          <p style={{ textAlign: 'start', width: "96%", marginLeft: 10, marginTop: 0, paddingLeft:"60px" }}>
      Tenes la oportunidad de ganar en los torneos de CS:GO de esta semana. <br></br>El 1er puesto se lleva 250$.
       <br></br>Únete al torneo: https://GLHF.gg/Season31 <br></br>🗓️ Todos los jueves a las 19:00 HS.
       <br></br> 🎟️ Entrada gratuita <br></br> 💵 $850 en premios a ganar semanalmente. 
</p>
          <img src={`${PostTorneo}`} className="PostImagenes" alt="" />
            <div style={{display:"flex"}}>
              <div style={{display:"flex", marginLeft:"10px"}}>
              <div style={{display:"flex", alignItems:"center",  cursor:"pointer"}}>
                <img src={`${Like}`} className="iconsforPost" onClick={handleLike} alt="" />
                <p style={{marginLeft:"6px"}}>{count} Me Gusta</p>
              </div>
              <div style={{display:"flex", alignItems:"center", marginLeft:20,  cursor:"pointer"}}>
                <img src={`${ComentarioIcon}`} className="iconsforPost" alt="" />
                <p style={{marginLeft:"6px"}}>120 Comentarios</p>
              </div>
              <div style={{display:"flex", alignItems:"center", marginLeft:330,  cursor:"pointer"}}>
                <img src={`${CompartirIcon}`} className="iconsforPost" alt="" />
                <p style={{marginLeft:"6px"}}>Compartir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}