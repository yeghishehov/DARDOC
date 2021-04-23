import { useEffect, useState } from "react";

export default function useAuth() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthorized = localStorage.getItem('authorized');
    if (isAuthorized) {
      setAuthorized(true);
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, []);
  
  useEffect(() => {
    if (authorized) {
      localStorage.setItem('authorized', authorized)
    } else {
      localStorage.clear('authorized')
    }
  }, [authorized]);

  return { authorized, setAuthorized, loading };
}
