import Navbar from "./Components/Navbar";
import Home from "./Screen/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home cat={"General"} />} /> 
      <Route path="/sports" element={<Home cat={"Sports"} />} /> 
      <Route path="/entertainment" element={<Home cat={"Entertainment"} />} /> 
      <Route path="/health" element={<Home cat={"Health"} />} /> 
      <Route path="/technology" element={<Home cat={"Technology"} />} /> 
      <Route path="/politics" element={<Home cat={"Politics"} />} /> 
      <Route path="/Business" element={<Home cat={"Business"} />} /> 
      <Route path="/science" element={<Home cat={"Science"} />} /> 
      <Route path="/india" element={<Home con={"In"}/>} />

    </Routes>
  </BrowserRouter>

  );
}

export default App;
