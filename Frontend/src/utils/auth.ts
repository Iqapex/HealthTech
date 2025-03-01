import { useState, useEffect } from 'react';
export const checkAuth = async () => {
    try {
      // Check for valid access token
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (!response.ok) throw new Error('Unauthorized');
      return true;
    } catch{
      localStorage.removeItem('authToken');
      return false;
    }
  };
  
  // Update App component
  function App() {
    const [isAuth, setIsAuth] = useState(false);
  
    useEffect(() => {
      const verifyAuth = async () => {
        const authenticated = await checkAuth();
        setIsAuth(authenticated);
      };
      
      verifyAuth();
      window.addEventListener('storage', verifyAuth);
      return () => window.removeEventListener('storage', verifyAuth);
    }, []);
  }

  export default App;