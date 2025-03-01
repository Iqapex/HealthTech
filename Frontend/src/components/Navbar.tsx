import { Home, Users, Search, Cloud, MessageCircle, Scale, LogOut, User2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Reusable NavLink component
function NavLink({ to, icon, isActive }: { 
  to: string;
  icon: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link 
      to={to}
      className={`p-2 rounded-lg transition-all ${
        isActive 
          ? 'text-indigo-600 bg-indigo-50' 
          : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-100'
      }`}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
    </Link>
  );
}


export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">GOLICIT</span>
          </Link>

          {/* Navigation Section */}
          <div className="flex items-center space-x-6">
            {/* Main Navigation Links */}
            <div className="flex items-center space-x-5">
              <NavLink to='/profile-info' icon={<User2 className='w-5 h-5' />} isActive={isActive('/profile-info')} />
              <NavLink to="/home" icon={<Home className="w-5 h-5" />} isActive={isActive('/')} />
              <NavLink to="/contacts" icon={<Users className="w-5 h-5" />} isActive={isActive('/contacts')} />
              <NavLink to="/search" icon={<Search className="w-5 h-5" />} isActive={isActive('/search')} />
              <NavLink to="/cloud" icon={<Cloud className="w-5 h-5" />} isActive={isActive('/cloud')} />
              <NavLink to="/messages" icon={<MessageCircle className="w-5 h-5" />} isActive={isActive('/messages')} />
              <NavLink to="/logout" icon={<LogOut className="w-5 h-5" />} isActive={isActive('/logout')} />

            </div>

            {/* Premium Button */}
            <button
            className="ml-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-md transition-all transform hover:scale-105">
              <Link to="/getpremium">Get Premium</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

