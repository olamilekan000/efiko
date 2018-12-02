import React, { Component } from 'react';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import getJwt from '../../helpers/index'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Navbar extends Component {
	render(){
		console.log(this.props)
		return (
			<div>
			  <nav>
			    <div className="nav-wrapper">
			    	<div className="container">
				      <Link to="/" className="brand-logo center">Efiko</Link>
				      <ul>
				      	{ getJwt() ? <SignInLink /> : <SignOutLink /> }
				      </ul>
			    	</div>
			    </div>
			  </nav>
			</div>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.signIn.sigInData
	}
}

export default connect(mapStateToProps)(Navbar)