import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card';
import axios from 'axios';

export default function Home() {
    const [news,setNews]=useState("");
    const fetchData=async()=>{
    var url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d9405ee644dd4c678b25eed0dd3cce59`
  await axios.get(url).then((res)=>setNews(res.data.articles));  
  }
     useEffect(()=>{
         fetchData();
     },[])
     console.log(news);
  return (
    <div >
        <Navbar/>
        <div className='container-fluid d-flex flex-wrap'>
         {news ? news.map((items,ind)=>(
              <Card title={items.title} urlToImage={items.urlToImage} description={items.description} url={items.url} />
         )):"Loading......................."}
        </div>
    </div>
  )
}
