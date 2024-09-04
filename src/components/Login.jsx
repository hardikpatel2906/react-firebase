import { useEffect, useState } from "react";
import { auth } from "../firbase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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
        <div>
            <form onSubmit={login}>
                <h1>Login</h1>
                <input type="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit">Create Account</button>
            </form>
            {user ? (
                <div>
                    <p>Welcome {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>You are not logged in</p>
                </div>
            )}
        </div>
    )
};
export default Login;