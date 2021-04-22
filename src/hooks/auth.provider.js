import { createContext, useContext } from 'react';
import useAuth from './useAuth';

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const { authorized, setAuthorized } = useAuth();

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
}
