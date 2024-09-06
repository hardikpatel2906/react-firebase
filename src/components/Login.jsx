import { useEffect, useState } from "react";
import { auth } from "../firbase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log(userCredential);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
        return () => unsubscribe();
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="flex justify-center w-full">
            {!user &&
                <>
                    <form className="flex flex-col space-y-4 p-6 w-[400px]" onSubmit={login}>
                        <h1 className="text-3xl text-center font-lato">Login</h1>
                        <input
                            className="p-2 border border-gray-300 rounded"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <input
                            className="p-2 border border-gray-300 rounded"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <button
                            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            type="submit"
                        >
                            Login
                        </button>
                        <p className="text-center font-lato">Not have an account? <Link to="/">Register</Link></p>
                    </form>
                </>
            }
            {user &&
                <>
                    <div className="flex justify-center flex-col space-y-4 p-6">
                        <p className="text-xl">Welcome {user.email}</p>
                        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={logout}>Logout</button>
                    </div>
                </>
            }
        </div>
    )
};
export default Login;