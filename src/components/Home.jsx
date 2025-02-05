import { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth).then(() => setUser(null)).catch((err) => console.log(err));
    };

    return (
        <div className="flex justify-center flex-col items-center space-y-4 p-6">
            {user ? (
                <>
                    <p className="text-xl">Welcome, {user.email}</p>
                    <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={logout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <p className="text-xl">Please log in to access this page.</p>
                    <Link className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" to="/login">Login</Link>
                </>
            )}
        </div>
    );
};

export default Home;
