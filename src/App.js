import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/search/:id" element={<SearchResults />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
