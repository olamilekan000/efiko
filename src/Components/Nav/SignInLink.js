import React from 'react'
import { Link } from 'react-router-dom'
import refresh from '../../helpers/refresh'

const SignInLink = ({ signoutUser }) => {

	console.log(signoutUser)

	return(
		<div>
			<li><Link to='/Profile'>Dashboard</Link></li>
			<li> <a onClick={ () => refresh(signoutUser) } >Sign-Out</a> </li>			
		</div>
	)
}

export default SignInLink