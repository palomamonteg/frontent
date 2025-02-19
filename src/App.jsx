import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Home from "./pages/Home";
import EditResume from "./pages/EditResume";
import ViewResume from "./pages/ViewResume";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditResume />} />
        <Route path="/view" element={<ViewResume />} />
      </Routes>
    </Router>
  );
}

export default App;