import React from 'react'
import "./home.css"
import Navbar from '../../Componentes/Navbar/Navbar'
import Leftbar from '../../Componentes/LeftsideContainer/Leftbar'
import Mainpost from '../../Componentes/MainPostContainer/Mainpost'
import Rightbar from '../../Componentes/RightsideContainer/Rightbar'

export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='ComponentContainer'> 
          <Leftbar/>
          <Mainpost/>
          <Rightbar/>
        </div>
    </div>
  )
}
