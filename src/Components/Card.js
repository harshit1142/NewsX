import React from 'react'

export default function Card({title,description,url,urlToImage}) {
    const defaultImg="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
  return (
    <div>
        <div className="card m-3" >
  <img src={(urlToImage!=null)?urlToImage:defaultImg} className="card-img-top img-post" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{(title)?title.slice(0,30):""}</h5>
    <p className="card-text">{(description)?description.slice(0,55)+"....":""}</p>
    <a href={url} className="btn btn-primary">Read</a>
  </div>
</div>
    </div>
  )
}
