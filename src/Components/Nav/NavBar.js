import React, { Component } from 'react';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
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
				      <Link to="/" className="brand-logo center">Efiko - Where all IT books live.</Link>
				      <ul>
				      	{ this.props.auth ? <SignInLink /> : <SignOutLink /> }
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
		auth: state.jwt.jwtToken
	}
}

export default connect(mapStateToProps)(Navbar)