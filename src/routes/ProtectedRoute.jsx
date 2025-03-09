import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firestoreConfig";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  return user ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
