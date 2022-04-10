import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import "../Login/Login.css"
import auth from "../../firebase.init"

const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")
	const navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => setError(""), [2000])
	}, [error])
	const [createUserWithEmailAndPassword, user, loading, errorHook] =
		useCreateUserWithEmailAndPassword(auth)
	if (user) {
		navigate('/')
	}
	const handleSignUp = (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setError("Password mismatch")
			return
		}
		createUserWithEmailAndPassword(email, password)
	}
	return (
		<div className="form-container">
			<form onSubmit={handleSignUp}>
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
				<div>
					<label htmlFor="password">Confirm Password</label>
					<input
						onBlur={(e) => {
							setConfirmPassword(e.target.value)
						}}
						type="password"
						name="password"
						id=""
						required
					/>
				</div>
				<p style={{ color: "red" }}>{error || errorHook.message}</p>
				{loading ? (
					"Loading..."
				) : (
					<input type="submit" value="Register" />
				)}
				<p>
					Already have a account?<Link to="/login">Login</Link>{" "}
				</p>
			</form>
		</div>
	)
}

export default Register
