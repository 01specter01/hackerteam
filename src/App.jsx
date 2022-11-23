import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Loading from "./components/Loading";
import CodingSubscription from "./components/middleComponents/CodingSubscription";
import Contacts from "./components/middleComponents/Contacts";
import Docs from "./components/middleComponents/Docs";
import Home from "./components/middleComponents/Home";
import Root from "./components/middleComponents/Root";
import Tutorial from "./components/middleComponents/Tutorial";
import navItems from "./data.json";
import Aim from "./components/footer/aboutUs/Aim";
import Vision from "./components/footer/aboutUs/Vision";
import Testemonials from "./components/footer/aboutUs/Testemonials";

function App() {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/root/react");
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="root" element={<Root />}>
          <Route path={navItems.navItems[0]} element={<Home />} />
          <Route path={navItems.navItems[1]} element={<Docs />} />
          <Route path={navItems.navItems[2]} element={<Tutorial />} />
          <Route path={navItems.navItems[3]} element={<CodingSubscription />} />
          <Route path={navItems.navItems[4]} element={<Contacts />} />
          <Route path="aim" element={<Aim />} />
          <Route path="vision" element={<Vision />} />
          <Route path="testimonials" element={<Testemonials />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
