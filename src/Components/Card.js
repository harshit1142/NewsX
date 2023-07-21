import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Card({title,description,url,urlToImage}) {
    const defaultImg="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
  return (
    <div>
        <motion.div className="card  m-1 " 
         animate={{x:0,opacity:1}}
         initial={{x:-100,opacity:0.6}}
        >
  <img src={(urlToImage!=null)?urlToImage:defaultImg} className="card-img-top img-post" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{(title)?title.slice(0,30):""}</h5>
    <p className="card-text">{(description)?description.slice(0,55)+"....":""}</p>
    <Link to={url} target='_blank' className="btn btn-success">Read</Link>
  </div>
</motion.div>
    </div>
  )
}
