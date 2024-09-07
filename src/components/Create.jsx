import { useState } from "react";
import { auth, signInWithGooglePopup } from "../firbase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Create = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log(userCredential);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log("Response", response)
    }
    return (
        <>
            <div className="flex justify-center w-full">
                <form className="flex flex-col space-y-4 p-6 w-[400px]" onSubmit={createAccount}>
                    <h1 className="text-3xl text-center font-lato">Create a New Account</h1>
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
                        Create Account
                    </button>
                    <p className="text-center font-lato">Already have an account? <Link to="/login">Login</Link></p>
                </form>

            </div>
            <div className="flex justify-center w-full">
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={logGoogleUser}>Signin with Google</button>
            </div>
        </>
    )
};
export default Create;