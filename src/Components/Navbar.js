import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  //  const [search, setSearch] = useState("");
  // const handleSearch=()=>{
   
  // }
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
    <Link className="navbar-brand text-danger" to="/">NewsX</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown bg-dark text-white">
          <Link className="nav-link dropdown-toggle text-white" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul  className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><hr  className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/india">India</Link></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" value={search} type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}
