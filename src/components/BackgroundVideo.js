import React from "react"
import classes from './BackgroundVideo.module.css'

const BackgroundVideo = () =>{
    const videoSource = "https://i.imgur.com/Ql21izo.mp4"
    return(
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
            <source src={videoSource} type="video/mp4"/>
            Your browser does not suport the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo