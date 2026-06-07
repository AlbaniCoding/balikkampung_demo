import { BrowserRouter, Routes, Route } from "react-router-dom";

import Legacy from "./pages/Legacy";
// import Planner from "./pages/Planner";
// import Features from "./pages/Features";
// import Budget from "./pages/Budget";
// import Family from "./pages/Family";
// import Explore from "./pages/Explore";
// import Payment from "./pages/Payment";
// import Hotel from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Legacy />} />
        {/* <Route path="/planner" element={<Planner />} />
        <Route path="/features" element={<Features />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/family" element={<Family />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/hotel" element={<Hotel />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;