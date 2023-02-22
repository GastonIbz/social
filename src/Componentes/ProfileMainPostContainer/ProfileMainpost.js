import React from 'react'
import "./profilemainpost.css"
import Imagecover from "../Images/Profile6.png"
import ContentPost from "../ContentPostContainer/ContentPost"
import Post from "../PostContainer/Post";

export default function ProfileMainpost() {
  return (
    <div className='ProfilemainPostContainer'>
      <div>
      <img src={`${Imagecover}`} className="ImageCoverPerfil" alt=""/>
      <h2 style={{marginTop:-43, color:"white", textAlign:"start", marginLeft:"39px"}}>Tu Perfil</h2>
      </div>
      <ContentPost/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
