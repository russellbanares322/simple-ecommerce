import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./global/ErrorPage";
import ProtectedRoutes from "./global/ProtectedRoutes";
import useAuthentication from "./hooks/useAuthentication";
import Account from "./pages/account/Account";
import AuthLayout from "./pages/auth/AuthLayout";
import DealsPage from "./pages/deals/DealsPage";
import Home from "./pages/home/Home";

function App() {
  const queryClient = new QueryClient();
  const { isAuthenticated } = useAuthentication();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-poppins min-h-screen h-full relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<DealsPage />} />
          {!isAuthenticated && <Route path="/login" element={<AuthLayout />} />}
          {!isAuthenticated && (
            <Route path="/sign-up" element={<AuthLayout />} />
          )}
          <Route
            path="/my-account"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Account />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
