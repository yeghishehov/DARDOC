import { createContext, useContext } from 'react';
import useAuth from './useAuth';

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const { authorized, setAuthorized, loading } = useAuth();

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
