import React, { useState } from 'react'
import "./post.css"
import ImagePerfil from "../Images/perfil.png"
import ImageComent from "../Images/Post7.png"
import PostTorneo from "../Images/MoreIcon.png"
import LikeIcon from "../Images/like.png"
import ComentarioIcon from "../Images/comentario.png"
import CompartirIcon from "../Images/compartir.png"
import MoreIcon from "../Images/more.png"
import anotherlikeicon from "../Images/setLike.png"

export default function Post() {
  const [Like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(0);
  const [Comentarios, SetComentarios] = useState([]);
  const [comentariowriting, setcomentariowriting] = useState('')
  const [show, setshow] = useState(false);

  const handleLike = () => {
    if (Like === LikeIcon) {
      setLike(anotherlikeicon);
      setCount(+1);
    } else {
      setLike(LikeIcon)
      setCount(count - 1);
    }
  }
  const addComment = () => {
    const comentario = {
      "id": "fake10",
      "username": "Nickname :",
      "title": `${comentariowriting}`
    }
    SetComentarios(Comentarios.concat(comentario));
  }
  const handleComentario = () => {
    addComment();
  }

  console.log(Comentarios)
  const handleshow = ()=>{
    if(show === false){
      setshow(true)
    } else {
      setshow(false)
    }
  }



  return (
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ImageComent}`} className="PostImage" alt="" />
            <div>
              <p style={{ marginLeft: "5px", textAlign: "start" }}>Nickname</p>
              <p style={{ fontSize: "12px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Seguir a nickname</p>
            </div>
            <img src={`${MoreIcon}`} className="moreicono" alt="" />
          </div>
          <p style={{ textAlign: 'start', width: "96%", marginLeft: 10, marginTop: 0, paddingLeft: "60px" }}>
            Tenes la oportunidad de ganar en los torneos de CS:GO de esta semana. <br></br>El 1er puesto se lleva 250$.
            <br></br>Únete al torneo: https://GLHF.gg/Season31 <br></br>🗓️ Todos los jueves a las 19:00 HS.
            <br></br> 🎟️ Entrada gratuita <br></br> 💵 $850 en premios a ganar semanalmente.
          </p>
          <img src={`${PostTorneo}`} className="PostImagenes" alt="" />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <img src={`${Like}`} className="iconsforPost" onClick={handleLike} alt="" />
                <p style={{ marginLeft: "6px" }}>{count} Me Gusta</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                <img src={`${ComentarioIcon}`} className="iconsforPost" onClick={handleshow} alt="" />
                <p style={{ marginLeft: "6px" }}>0 Comentarios</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginLeft: 330, cursor: "pointer" }}>
                <img src={`${CompartirIcon}`} className="iconsforPost"  alt="" />
                <p style={{ marginLeft: "6px" }}>Compartir</p>
              </div>
            </div>
          </div>
          {show === true ?
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${ImagePerfil}`} className="PostImage" alt="" />
              <input type="text" className='commentinput' placeholder='Escriba un comentario' onChange={(e) => setcomentariowriting(e.target.value)} />
              <button className='addComentbtn' onClick={handleComentario}>Comentar</button>
            </div>
            {Comentarios.map((item) => (
              <div style={{ alignItems: "center" }}>
                <div style={{display:"flex", alignItems:"center"}}>
                <img src={`${ImagePerfil}`} className="PostImage" alt="" />
                <p style={{ marginLeft: "6px", fontSize:18 , marginTop:6}}>{item.username}</p>
                </div>
                <p style={{ marginLeft: "55px", textAlign:"start", marginTop:-16 }}>{item.title}</p>
                <p style={{ marginLeft: "55px", textAlign:"start", marginTop:-10, color:"#aaa", fontSize:12 }}>Responder</p>
              </div>
            ))}
          </div>:''
          }
        </div>
      </div>
    </div>
  )
}
