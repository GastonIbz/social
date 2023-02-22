import React from 'react'
import Navbar from '../../../Componentes/Navbar/Navbar'
import ProfileLeftbar from '../../../Componentes/ProfileLeftsideContainer/ProfileLeftbar'
import ProfileMainpost from '../../../Componentes/ProfileMainPostContainer/ProfileMainpost'
import ProfileRightbar from '../../../Componentes/ProfileRightsideContainer/ProfileRightbar'
import "./profile.css"

export default function Profile() {
  return (
    <div className='ProfileContainer'>
        <Navbar/>
        <div className='subProfileContainer'>
            <ProfileLeftbar/>
            <ProfileMainpost/>
            <ProfileRightbar/>
        </div>
    </div>
  )
}
