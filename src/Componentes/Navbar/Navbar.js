import React from 'react'
import "./navbar.css";
import searchIcon from "../Images/search.png"
import Notification from "../Images/bell.png"
import Message from "../Images/mensaje.png"
import Profileimage from "../Images/perfil.png";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
<div className='mainNavbar'>
    <div className='ContainerLogo'>
        <p className='ContainerName'>GL HF</p>
    </div>

    <div>
        <div className='ContainerSearch'>
            <img src={`${searchIcon}`} className="searchIcon" alt=""/>
            <input type="text" className='searchInput' placeholder='Buscar...' name="" id="" />
        </div>
    </div>
    <div className='ContainerIcons'>
        <img src={`${Notification}`} className="Icons" alt=" " />
        <img src={`${Message}`} className="Icons" alt=" " />
        <Link to={"/profile/62"}>
        <div style={{display:'flex', aligItems: 'center'}} >
            <img src={`${Profileimage}`} className="ProfileImage" alt="" />
            <p className='ContainerNickName' style={{marginLeft:'7px'}}>Nickname</p>
        </div>
        </Link>
</div>
</div>
  )
}
