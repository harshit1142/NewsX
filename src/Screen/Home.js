import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import NotFound from '../Components/NotFound';

export default function Home({ cat, con }) {
  const [searchit, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  // Constructing the API URL using useMemo
  const apiUrl = useMemo(() => {
    if (searchit) {
      return `https://newsapi.org/v2/everything?q=${searchit}&apiKey=${apiKey}`;
    }
    if (con && !cat) {
      return `https://newsapi.org/v2/top-headlines?country=${con}&apiKey=${apiKey}`;
    }
    if (cat && !con) {
      return `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=${apiKey}`;
    }
    if (cat && con) {
      return `https://newsapi.org/v2/everything?country=${con}&category=${cat}&apiKey=${apiKey}`;
    }
    return "";
  }, [cat, con, searchit]);

  // Fetch data using useCallback
  const fetchData = useCallback(async () => {
    if (!apiUrl) return; // Exit if no URL is constructed

    setLoading(true);
    let isMounted = true; // Track if the component is mounted

    try {
      const response = await axios.get(apiUrl);
      if (isMounted) { // Only set state if still mounted
        setNews(response.data.articles);
        document.title = cat ? cat : con ? con : searchit;
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (isMounted) { // Only set loading state if still mounted
        setLoading(false);
      }
    }

    return () => {
      isMounted = false; // Cleanup function sets isMounted to false
    };
  }, [apiUrl, cat, con, searchit]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(); // Fetch data only when search is submitted
  };

  useEffect(() => {
    fetchData();
  }, [cat, con]);

  return (
    <div className='mt-5'>
      <nav className="navbar navbar-light bg-light container-fluid d-flex justify-content-end">
        <form className="d-flex justify-content-end" onSubmit={handleSearch}>
          <input 
            className="form-control mr-sm-2 me-3" 
            type="search" 
            onChange={(e) => setSearch(e.target.value)} 
            value={searchit} 
            placeholder="Search" 
            aria-label="Search" 
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <AnimatePresence>
        <motion.div 
          className='container-fluid d-flex flex-wrap mt-5'
          animate={{ x: 0 }} 
          initial={{ x: -100 }} 
          exit={{ x: 1000 }}
        >
          {loading ? (
            <div>Loading...</div> // Display loading state
          ) : news.length > 0 ? (
            news.map((items, ind) => (
              <Card 
                key={ind} // Add a key prop for list rendering
                title={items.title} 
                urlToImage={items.urlToImage} 
                description={items.description} 
                url={items.url} 
              />
            ))
          ) : (
            <NotFound /> // Display NotFound component if no articles
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
