import React from 'react'
import { Link } from 'react-router-dom'

const SignOutLink = () => {
	return(
		<div>
			<li> <Link to='/SignIn'>Sign-In</Link> </li>
			<li> <Link to='/SignUp'>Sign-Up</Link> </li>
		</div>
	)
}

export default SignOutLink