import React from 'react'
import "./leftbar.css"
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



export default function Leftbar() {
  return (
    <div className='Leftbar'>
      <div className='NotificacionesContainer'>
<div style={{display:'flex', justifyContent:'space-around'}}>
<p style={{marginLeft:"5px"}}>Notificaciones</p>
<p style={{ color: "#aaa" , marginLeft:"40px" }}>Ver a todos</p>
  </div>
  <div>
  <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${image}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>A QuickSide le gusto tu post</p>
    <img src={`${image}`} className="LikeImg" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${post8}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , textAlign:"start" , width:"120px"}}>Gushaba comenzo a seguirte</p>
    <img src={`${post8}`} className="followinguserimage" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${image3}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>A Riper le gusto tu post</p>
    <img src={`${image3}`} className="LikeImg" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${post2}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 ,  width:"120px" , textAlign:"start"}}>Radamantis comenzo a seguirte</p>
    <img src={`${post2}`} className="followinguserimage" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${image5}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 ,  width:"120px" , textAlign:"start"}}>Lauchita comenzo a seguirte</p>
    <img src={`${image5}`} className="followinguserimage" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${post}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>A Gonkun le gusto tu post</p>
    <img src={`${post}`} className="LikeImg" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${image4}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 ,  width:"120px" , textAlign:"start"}}>Soti comenzo a seguirte</p>
    <img src={`${image4}`} className="followinguserimage" alt=""/>
    </div>
    <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
    <img src={`${post8}`} className="NotificationImg" alt=""/>
    <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>A Killua le gusto tu post</p>
    <img src={`${post8}`} className="LikeImg" alt=""/>
    
    </div>
    
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
