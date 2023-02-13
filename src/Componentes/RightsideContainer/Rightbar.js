import React from 'react'
import "./rightbar.css"
import ads from "../Images/Ads.png";
import ads2 from "../Images/Ads2.png";
import addFriends from "../Images/Adduser.png"
import Add from "../Images/Profile2.png"
import Add2 from "../Images/Post8.png"
import Add3 from "../Images/Post5.png"
import Add4 from "../Images/Profile7.png"
import Add5 from "../Images/Post6.png"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={`${ads}`} className="adsimg" alt=""/>
          <div>
          <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>GG.BET</p>
          <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Compra bonus para poder jugar con tus amigos.</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${ads2}`} className="adsimg" alt=""/>
          <div>
          <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Club Skin</p>
          <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Inscribite a los mejores torneos de la zona.</p>
          </div>
        </div>
      </div>
      <div className='rightcontainer2'>
     <h3 style={{textAlign:"start", marginLeft:"15px"}}> Sugerido para usted</h3>
     <div style={{margintop:"10px"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:"center"}}>
        <img src={`${Add}`} className="ProfileImage" alt=""/>
        <div>
        <p style={{marginLeft:"10px", textAlign:'start'}}>Busta</p>
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Sugerido para usted</p>
        </div>
        </div>
        <div style={{backgroundColor:"#023102ce", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
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
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Seguido por Busta</p>
        </div>
        </div>
        <div style={{backgroundColor:"#023102ce", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
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
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Seguido por Busta</p>
        </div>
        </div>
        <div style={{backgroundColor:"#023102ce", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
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
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Seguido por Busta</p>
        </div>
        </div>
        <div style={{backgroundColor:"#023102ce", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
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
        <p style={{marginLeft:"10px", textAlign:'start', marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Seguido por Busta</p>
        </div>
        </div>
        <div style={{backgroundColor:"#023102ce", padding:'10px',marginRight:13, borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfriend" alt=""/>
        </div>
      </div>
     </div>
      </div>
    </div>
    
  )
}
