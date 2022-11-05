import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Exchanges from "./components/Exchanges";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinsDetails";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
        <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element = {<Exchanges />} />
        <Route path="/coins" element = {<Coins />} />
        <Route path="/coin/:id" element={<CoinDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
