import React from 'react'
import Fullplayer from './fullplayer'
import { useContext, useState } from "react"
import { SpotifyContext } from "../context/context"


const design={
  display:"flex",
  justifyContent: "flex-start",
  height:"50px",
  margin:"auto",
  fontSize:"45px",
  padding:"20px 20px",
}

const pic={
  width:"300px",
  height:"350px",
  margin:"60px auto 20px auto",
}


export default function fullscreen({click}) {

  const {currentSong}=useContext(SpotifyContext)


  return (
    <>
    <nav style={design} className="text-xl">
      <h2 style={{"margin":"25px 80px"}}>{currentSong.title}</h2>
      <h2 style={{"margin":"25px 80px 25px auto"}}>WEB3 Music</h2>
    </nav>
    <div style={pic}>
      <img  src="../assets/album.jpg" style={{"borderRadius":"50px"}}/>
    </div>
    <div >
    <Fullplayer click={click}/>
    </div>
    </>
  )
}
