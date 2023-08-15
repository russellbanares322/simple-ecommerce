import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import DealsPage from "./pages/deals/DealsPage";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="font-poppins min-h-[100vh] h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<DealsPage />} />
      </Routes>
    </div>
  );
}

export default App;
