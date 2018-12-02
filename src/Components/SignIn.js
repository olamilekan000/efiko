import React, { Component } from 'react';
import { connect } from 'react-redux';
import signinUser from '../store/actions/signinUser'

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

	signIn = e => {
		e.preventDefault();
		this.props.SignInUser(this.state)

		this.props.SignInData === {} ? null : this.props.history.push('/')
	}

	render(){
		console.log(this.props)
		return (
			<div>
				<div className="container">
					<div className="center"><h2>Log in</h2></div>
					<div className="card formCard">
						<div className="card-content">
							<form onSubmit={this.signIn}>
								<div className="row">
									<div className="input-field col s12">
										<input id="email" type="email" className="validate" onChange={ this.handleChange }/>
										<label htmlFor="email">Email</label>
									</div>
								</div>
								<div className="row">
							        <div className="input-field col s12">
							          <input id="password" type="password" className="validate" onChange={ this.handleChange }/>
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
		SignInUser: (userData) => { dispatch( signinUser(userData) ) }
	}
}

const mapStateToProps = (state) => {
	return {
		SignInData: state.signIn.sigInData
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn) 