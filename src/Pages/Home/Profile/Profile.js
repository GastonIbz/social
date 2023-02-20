import React from 'react'
import Navbar from '../../../Componentes/Navbar/Navbar'
import MainPost from '../../../Componentes/MainPostContainer/Mainpost'
import ProfileLeftbar from '../../../Componentes/ProfileLeftsideContainer/ProfileLeftbar'
import ProfileRightbar from '../../../Componentes/ProfileRightsideContainer/ProfileRightbar'
import "./profile.css"

export default function Profile() {
  return (
    <div className='ProfileContainer'>
        <Navbar/>
        <div className='subProfileContainer'>
            <ProfileLeftbar/>
            <MainPost/>
            <ProfileRightbar/>
        </div>
    </div>
  )
}
