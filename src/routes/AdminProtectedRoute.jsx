import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firestoreConfig";
// import { auth, db } from "../../firebase/firestoreConfig"; // Adjust the path to your config file

const AdminProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // Fetch user role from Firestore
                const userRef = doc(db, "users_data", currentUser.uid);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists() && userSnap.data().role === "admin") {
                    setIsAdmin(true);
                }
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading state while checking auth
    }

    return user && isAdmin ? children : <Navigate to="/not-authorized" />;
};

export default AdminProtectedRoute;
