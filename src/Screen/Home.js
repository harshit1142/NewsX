import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card';
import axios from 'axios';

export default function Home({cat}) {
    const [news,setNews]=useState("");
    const fetchData=async({cat})=>{
    var url= cat? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=d9405ee644dd4c678b25eed0dd3cce59`:
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d9405ee644dd4c678b25eed0dd3cce59`;
      console.log(url);
  await axios.get(url).then((res)=>setNews(res.data.articles));  
  }
     useEffect(()=>{
         fetchData({cat});
     },[cat])
  return (
    <div >
     
        <div className='container-fluid d-flex flex-wrap'>
         {news ? news.map((items,ind)=>(
              <Card title={items.title} urlToImage={items.urlToImage} description={items.description} url={items.url} />
         )):"Loading......................."}
        </div>
    </div>
  )
}
