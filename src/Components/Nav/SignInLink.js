import React from 'react'
import { Link } from 'react-router-dom'
import refresh from '../../helpers/refresh'

const SignInLink = () => {

	return(
		<div>
			<li><Link to='/Dashboard'>Dashboard</Link></li>
			<li> <a onClick={ () => refresh() } >Sign-Out</a> </li>			
		</div>
	)
}

export default SignInLink