import { useEffect, useState } from "react";

export default function useAuth() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAuthorized = localStorage.getItem('authorized');
    if (isAuthorized) {
      setAuthorized(true);
    }
  }, []);
  
  useEffect(() => {
    if (authorized) {
      localStorage.setItem('authorized', authorized)
    } else {
      localStorage.clear('authorized')
    }
  }, [authorized]);

  return { authorized, setAuthorized };
}
