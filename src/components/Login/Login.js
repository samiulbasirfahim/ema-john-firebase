import React, { useEffect, useState } from "react"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { Link, useLocation, useNavigate } from "react-router-dom"
import auth from "../../firebase.init"
import "./Login.css"

const Login = () => {
	const location = useLocation()
	let from = location.state?.from?.pathname || "/";
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const [signInWithEmailAndPassword, user, loading, errorHook] =
		useSignInWithEmailAndPassword(auth)
	const handleSignIn = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(email, password)
	}
	if (errorHook) {
		console.log(errorHook.message)
	}
	if (user) {
		navigate(from, {replace: true})
	}
	return (
		<div className="form-container">
			<form onSubmit={handleSignIn}>
				<div>
					<label htmlFor="email">Your email</label>
					<input
						onBlur={(e) => {
							setEmail(e.target.value)
						}}
						type="email"
						name="email"
						id=""
						required
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						onBlur={(e) => {
							setPassword(e.target.value)
						}}
						type="password"
						name="password"
						id=""
						required
					/>
				</div>
				{loading ? "Loading..." : <input type="submit" value="Login" />}
				<p style={{ color: "red" }}>{errorHook?.message}</p>
				<p>
					Don't have a account?<Link to="/register">Register</Link>{" "}
				</p>
			</form>
		</div>
	)
}

export default Login
