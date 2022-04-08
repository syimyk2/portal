import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./Layouts/Headers";
import Features from "./pages/Features";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home/" element={<HomePage />} />
        <Route path="products/" element={<Products />} />
        <Route path="features/" element={<Features/>} />
        <Route path="support/" element={<Support/>} />
        
      </Routes>
    </>
  );
}

export default App;
