import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import signinUser from '../store/actions/signinUser'
import getJwtToken from '../store/actions/jwtToken'

class SignIn extends Component{
	state ={
		email: null,
		password: null
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	signIn =  e => {
		e.preventDefault();

		this.props.SignInUser(this.state)
		this.props.getToken(this.props.SignInData)
	}

	render(){
		console.log(this.props)
		if(this.props.token) { return <Redirect to='/' /> }
		return (
			<div>
				<div className="container">
					<div className="center"><h2>Log in</h2></div>
					<div className="card formCard">
						<div className="card-content">
							<form onSubmit={this.signIn}>
								<div className="row">
									<div className="input-field col s12">
										<input id="email" type="email" className="validate" onChange={ this.handleChange } required/>
										<label htmlFor="email">Email</label>
									</div>
								</div>
								<div className="row">
							        <div className="input-field col s12">
							          <input id="password" type="password" className="validate" onChange={ this.handleChange } required/>
							          <label htmlFor="password">Password</label>
							        </div>
						      	</div>
								<div className="row">
							        <div className="col s12">
										<button className="btn red darken-3">Sign - In</button>
							        </div>
						      	</div>						      	
							</form>
						</div>					
					</div>					
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return{
		SignInUser: (userData) => { dispatch( signinUser(userData) ) },
		getToken: (token) => { dispatch( getJwtToken(token) ) }
	}
}

const mapStateToProps = (state) => {
	return {
		SignInData: state.signIn.sigInData,
		token: state.jwt.jwtToken,
		seeState: state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn) 
