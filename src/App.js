import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NewsMain from "./Components/NewsMain"; 
function App() {
  const pageSize = 5;

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          
          <Routes>
            <Route path="/business" element={<NewsMain pageSize={pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<NewsMain pageSize={pageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<NewsMain pageSize={pageSize} country="us" category="general" />} />
            <Route path="/health" element={<NewsMain pageSize={pageSize} country="us" category="health" />} />
            <Route path="/science" element={<NewsMain pageSize={pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<NewsMain pageSize={pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<NewsMain pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
