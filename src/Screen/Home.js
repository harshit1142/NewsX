import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import axios from 'axios';
import { motion ,AnimatePresence} from "framer-motion"
import NotFound from '../Components/NotFound';


export default function Home({cat,con}) {
   var search="";
  const [searchit, setSearch] = useState("");

  const handleSearch=(e)=>{
    e.preventDefault();

      fetchData();
  }
  

  
  const [news,setNews]=useState("");

  const fetchData=async()=>{
    try {
      var url= cat? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=d9405ee644dd4c678b25eed0dd3cce59`:
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d9405ee644dd4c678b25eed0dd3cce59`;
      url=con?`https://newsapi.org/v2/top-headlines?country=${con}&apiKey=d9405ee644dd4c678b25eed0dd3cce59`:url;
      url=searchit!=""?`https://newsapi.org/v2/everything?q=${searchit}&apiKey=d9405ee644dd4c678b25eed0dd3cce59`:url;
      await axios.get(url).then((res)=>setNews(res.data.articles));  
      document.title=(cat?cat:con?con:searchit);
    } catch (error) {
       console.log(error);
    }
  }

     useEffect(()=>{
         fetchData();
     },[cat,con]);

  return (
    <div className='mt-5'>
      <nav className="navbar navbar-light bg-light container-fluid d-flex justify-content-end">
  <form className="d-flex justiy-content-end">
    <input className="form-control mr-sm-2 me-3" type="search" onChange={(e)=>setSearch(e.target.value)} value={searchit} placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSearch} type="submit">Search</button>
  </form>
</nav>
      <AnimatePresence>
        <motion.div className='container-fluid d-flex flex-wrap mt-5'
        animate={{x:0}}
        initial={{x:-100}}
        exit={{x:1000}}
       
        >
         {news ? news.map((items,ind)=>(
              <Card title={items.title} urlToImage={items.urlToImage} description={items.description} url={items.url} />
         )):"Loading......................."}
        </motion.div>
        </AnimatePresence>
        {(news.length===0)?
        <NotFound />
        :""}
    </div>
  )
}
