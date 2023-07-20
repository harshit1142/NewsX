import Navbar from "./Components/Navbar";
import Home from "./Screen/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home cat={"general"} />} /> 
      <Route path="/sports" element={<Home cat={"sports"} />} /> 
      <Route path="/entertainment" element={<Home cat={"entertainment"} />} /> 
      <Route path="/health" element={<Home cat={"health"} />} /> 
      <Route path="/technology" element={<Home cat={"technology"} />} /> 
      <Route path="/politics" element={<Home cat={"politics"} />} /> 
      <Route path="/Business" element={<Home cat={"Business"} />} /> 
      <Route path="/science" element={<Home cat={"science"} />} /> 
      <Route path="/home" element={<Home />} />

    </Routes>
  </BrowserRouter>

  );
}

export default App;
