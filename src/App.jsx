import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";
import ImagePage from "./pages/ImagePage"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ImageGrid />
              </>
            }
          />
          <Route path="/image/:filename" element={<ImagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;