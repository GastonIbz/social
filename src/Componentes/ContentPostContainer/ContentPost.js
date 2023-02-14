import React from 'react'
import "./contentpost.css";
import profileimage from "../Images/perfil.png"
import ImageIcon from "../Images/galeria.png"
import EmojiIncon from "../Images/robot.png"
import VideoIcon from "../Images/video.png"


export default function ContentPost() {
  return (
    <div>
      <div className='ContainerUploadContent'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${profileimage}`} className="profileimage" alt="" />
          <input type="text" className='ContentChat' placeholder='Escribe en lo que estas pensando...' />
        </div>
        <div style={{ display: 'flex', margin: '10px' }}>
          <div>
            <img src={`${ImageIcon}`} className="icons" alt="" />
            <img src={`${EmojiIncon}`} className="icons" alt="" />
            <img src={`${VideoIcon}`} className="icons" alt="" />
            <button style={{marginLeft:"465px", paddingLeft:"20px", paddingRight:"20px", paddingTop:8, paddingBottom:8, border:"none",backgroundColor:"black", color:"white", borderRadius:"5px", cursor:"pointer"}}>Postear</button>
          </div>
        </div>
      </div>
    </div>
  )
}
