import React, { Component } from 'react';
import { connect } from 'react-redux'
import signupUser from '../store/actions/signupUser'
import { Redirect } from 'react-router-dom'
import getJwt from '../helpers/index'

class SignUp extends Component{
	state ={
		email: '',
		password: '',
		jwt: getJwt()
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	signUp =  e => {
		e.preventDefault();
		this.props.signUpUser(this.state);

		this.setState({
			email: '',
			password: ''			
		})

		this.props.signedUpUser === {} ? null : this.props.history.push('/SignIn')
	}

	render(){
		console.log(this.state.jwt)
		if(this.state.jwt) { return <Redirect to='/' /> }

		return (
			<div>
				<div className="container">
					<div className="center"><h2>Sign Up</h2></div>
					<div className="card formCard">
						<div className="card-content">
							<form onSubmit={this.signUp}>
								<div className="row">
									<div className="input-field col s12">
											<input id="email" type="email" className="validate" onChange={ this.handleChange }  value={ this.state.email } />
										<label htmlFor="email">Email</label>
									</div>
								</div>
								<div className="row">
							        <div className="input-field col s12">
								          <input id="password" type="password" className="validate" onChange={ this.handleChange } value={ this.state.password } />
							          <label htmlFor="password">Password</label>
							        </div>
						      	</div>
								<div className="row">
							        <div className="col s12">
										<button className="btn red darken-3">Sign - Up</button>
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
	return {
		signUpUser: (signUpData) => { dispatch( signupUser(signUpData) ) }
	}
}


const mapStateToProps = (state) => {
	return {
		signedUpUser:  state.signUp.signUpUserData
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
