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

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  return isAuthenticated() ? <Navigate to="/home" replace /> : <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation that's always visible */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">GOLICIT</span>
            </div>
            <div className="flex items-center space-x-4">
              {!isAuthenticated() ? (
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
          {/* Public routes */}
          <Route element={<PublicRoute />}>
            <Route path="//verify-email/:confirmationCode" element={<VerifyEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/getpremium" element={<><Navbar /><GetPremium /><Footer /></>} />
            <Route path="/contacts" element={<><Navbar /><Contacts /><Footer /></>} />
            <Route path="/search" element={<><Navbar /><Search /><Footer /></>} />
            <Route path="/cloud" element={<><Navbar /><Cloud /><Footer /></>} />
            <Route path="/messages" element={<><Navbar /><Messages /><Footer /></>} />
          </Route>

          {/* Root path handling */}
          <Route path="/" element={
            isAuthenticated() ? 
            <Navigate to="/home" replace /> : 
            <LandingPage />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;