import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./global/ErrorPage";
import ProtectedRoute from "./global/ProtectedRoute";
import useAuthentication from "./hooks/useAuthentication";
import Account from "./pages/account/Account";
import AuthLayout from "./pages/auth/AuthLayout";
import DealsPage from "./pages/deals/DealsPage";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/product/ProductDetails";

function App() {
  const queryClient = new QueryClient();
  const { isAuthenticated } = useAuthentication();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-poppins min-h-screen h-full relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* TODO: Make the product details a child of DealsPage and render it using Outlet  */}
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/deals/:productId" element={<ProductDetails />} />
          {!isAuthenticated && <Route path="/login" element={<AuthLayout />} />}
          {!isAuthenticated && (
            <Route path="/sign-up" element={<AuthLayout />} />
          )}
          {isAuthenticated && (
            <Route
              path="/my-account"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Account />
                </ProtectedRoute>
              }
            />
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
