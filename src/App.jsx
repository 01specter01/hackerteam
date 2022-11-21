import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Loading from "./components/Loading";
import Home from "./components/Home";

function App() {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/home");
    }, 2000);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
