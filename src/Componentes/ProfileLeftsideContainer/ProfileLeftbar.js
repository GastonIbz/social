import React from 'react'
import "./profileleftbar.css"
//Imagenes de Perfiles//
import image from "../Images/Profile.png"
import image3 from "../Images/Profile3.png"
import image4 from "../Images/Profile4.png"
import image5 from "../Images/Profile5.png"

//Imagenes de comunidad//
import post from "../Images/Post.png"
import post2 from "../Images/Post2.png"
import post3 from "../Images/Post3.png"
import post4 from "../Images/Post4.png"
import post5 from "../Images/Post5.png"
import post6 from "../Images/Post6.png"
import post7 from "../Images/Post7.png"
import post8 from "../Images/Post8.png"
import post9 from "../Images/Post9.png"



export default function ProfileLeftbar() {
  return (
    <div className='profileleftbar'>
      <div className='NotificacionesContainer'>
<div>
  <img src="" alt="" />
  <p>NickName</p>
</div>
    
    </div>
  
<div className='NotificacionesContainer'>
<div style={{display:'flex', justifyContent:'space-around'}}>
<p style={{marginLeft:"-20px"}}>Explore </p>
<p style={{ color: "#aaa" , marginLeft:"40px" }}>See all</p>
  </div>
 <div>
  <img src={`${post}`} className="exploreimage" alt=""/>
  <img src={`${post2}`} className="exploreimage" alt=""/>
  <img src={`${post3}`} className="exploreimage" alt=""/>
  <img src={`${post4}`} className="exploreimage" alt=""/>
  <img src={`${post5}`} className="exploreimage" alt=""/>
  <img src={`${post6}`} className="exploreimage" alt=""/>
  <img src={`${post7}`} className="exploreimage" alt=""/>
  <img src={`${post8}`} className="exploreimage" alt=""/>
  <img src={`${post9}`} className="exploreimage" alt=""/>
 </div>
    
  </div>
</div>

  )
}
