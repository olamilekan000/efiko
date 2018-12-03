import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Dasboard extends Component{
	render(){
		if(!this.props.token) { return <Redirect to='/SignIn' /> }
		return (
			<div id="Dashboard">
				<h1>Dashboard</h1>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.jwt.jwtToken
	}
}

export default connect(mapStateToProps)(Dasboard)
