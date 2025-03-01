import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Contacts from './pages/Contacts';
import Search from './pages/Search';
import Cloud from './pages/Cloud';
import Messages from './pages/Messages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetPremium from './pages/GetPremium';
import VerifyEmail from './pages/VerifyEmail';
import LawyerProfile from './pages/LawyerProfile ';
import Feed from './pages/Feed';
import { useState, useEffect } from 'react';
import ProfileInfo from './pages/ProfileInfo';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };
  
  // Initialize isAuth based on current authentication status
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  
  const ProtectedRoute = () => {
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
  };
  
  const PublicRoute = () => {
    return isAuth ? <Navigate to="/home" replace /> : <Outlet />;
  };
  
  useEffect(() => {
    const checkAuth = () => setIsAuth(isAuthenticated());
    // Update auth status when localStorage changes
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">GOLICIT</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Use isAuth state for conditional rendering */}
              {!isAuth ? (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-gray-900">LOG IN</Link>
                  <Link to="/signup" className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">SIGN UP</Link>
                </>
              ) : (
                <Link to="/home" className="text-gray-700 hover:text-gray-900">HOME</Link>
              )}
            </div>
          </div>
        </nav>

        <Routes>
          {/* Public routes - only accessible when not authenticated */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/verify-email/:confirmationCode" element={<VerifyEmail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/' element={<LandingPage />} />
          </Route>

          {/* Protected routes - only accessible when authenticated */}
          <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<><Navbar setIsAuth={setIsAuth} /><Home /><Footer /></>} />
          <Route path="/profile-info" element={<><Navbar setIsAuth={setIsAuth} /><ProfileInfo /><Footer /></>} />
            <Route path="/feed" element={<><Navbar setIsAuth={setIsAuth} /><Feed /><Footer /></>} />
            <Route path="/getpremium" element={<><Navbar setIsAuth={setIsAuth} /><GetPremium /><Footer /></>} />
            <Route path="/contacts" element={<><Navbar setIsAuth={setIsAuth} /><Contacts /><Footer /></>} />
            <Route path="/lawyer/:name" element={<><Navbar setIsAuth={setIsAuth} /><LawyerProfile /><Footer /></>} />
            <Route path="/search" element={<><Navbar setIsAuth={setIsAuth} /><Search /><Footer /></>} />
            <Route path="/cloud" element={<><Navbar setIsAuth={setIsAuth} /><Cloud /><Footer /></>} />
            <Route path="/messages" element={<><Navbar setIsAuth={setIsAuth} /><Messages /><Footer /></>} />
          </Route>

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to={isAuth ? "/home" : "/"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;