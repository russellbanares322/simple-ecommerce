import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AuthLayout from "./pages/auth/AuthLayout";
import DealsPage from "./pages/deals/DealsPage";
import Home from "./pages/home/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-poppins min-h-screen h-full relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/login" element={<AuthLayout />} />
          <Route path="/sign-up" element={<AuthLayout />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
