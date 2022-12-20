import React from "react"
import { useContext, useState } from "react"
import { SpotifyContext } from "../context/context"
import Image from "next/image"
import next from "../assets/next.svg"
import previous from "../assets/previous.svg"
import speaker from "../assets/speaker.svg"
import repeat from "../assets/repeat.svg"
import shuffle from "../assets/shuffle.svg"
import playRounded from "../assets/playRounded.svg"
import pauseIcon from "../assets/pause.svg"


const Fullplayer = ({songs, click}) => {
  const { currentSong, isPlaying, volume, onVolumeChange, timestamp, progress, playNext, playPrevious, isPaused, play, pause, onProgressChange } = useContext(SpotifyContext)

  if (!isPlaying) return null

  

  /** Show component if song is playing */
  return (
    <>
   
    <div  className={styles.mainControl} >
        <div>
          <p>{currentSong.title}</p>
          <p className='opacity-50'>{'artist'}</p>
          {/* <p className='opacity-50'>{currentSong.artiste}</p> */}
        </div>
      
      <div>
        <div className={styles.controlIconsContainer}>
          <div className={styles.controlIcon}>
            <Image src={shuffle} alt='' />
          </div>
          <div onClick={e => playPrevious(songs)} className={styles.controlIcon}>
            <Image src={previous} alt='' />
          </div>

        {isPaused ? <div className={styles.playIcon} onClick={play}><Image src={playRounded} alt="" /></div>
          : <div className={styles.pauseIconStyle} onClick={pause}><Image src={pauseIcon} alt="" /></div>}

          <div onClick={e => playNext(songs)} className={styles.controlIcon}>
            <Image src={next} alt='' />
          </div>
         
          <div className={styles.controlIcon}>
            <Image src={repeat} alt='' />
          </div>


        </div>
        <div className={styles.flexCenter}>
          <small>{timestamp}</small>
          <input
            value={progress}
            onChange={e => onProgressChange(e)}
            type='range'
            className={styles.range}
          />
          <small>{'2:43'}</small>
          {/* <small>{currentSong.songLength}</small> */}
        </div>
      </div>

      <div>
        <div className={styles.flexCenter}>
          <Image src={speaker} alt="" />
          <input value={volume} onChange={e => onVolumeChange(e)} type='range' id='volume-range' />
        </div>
      </div>

      <div className={styles.maxIcon} onClick={click} style={{"background":"white","height":"30px","width":"30px","border-radius":"60px"}}>
      <Image
          alt=''
          src='https://cdn-icons-png.flaticon.com/512/8001/8001620.png'
          width={30}
          height={30}
        />
        
          </div> 
      
    </div >
    </>
  )
}

export default Fullplayer


const design={
  border: "1px solid black",
  width: "100%",
  height: "25px"
}
const styles = {
  albumCoverContainer: `w-20 h-20 mr-3`,
  coverPhoto: `object-cover`,
  mainControl: `fixed bottom-13 left-40 p-5 py-3 pr-10 w-screen z-40 flex items-center justify-between`,
  // range: `appearance-none mx-3 hover:bg-[#000] h-1 hover:bg-[#22C55E] bg-[#fff] w-[500px]`,
  // volumeRange: `mx-3 -hue-rotate-90 h-1`,
  flexCenter: `flex items-center`,
  controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
  maxIcon: `mr-40 cursor-pointer hover:opacity-100 opacity-50`,
  playIcon: `mr-5 w-10 h-10 cursor-pointer hover:opacity-50`,
  pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
  controlIconsContainer: `flex items-center justify-center mb-2`,
}