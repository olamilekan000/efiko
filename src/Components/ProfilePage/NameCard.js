import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class NameCard extends Component{

	render(){
		console.log(this.props)
		return (
			<div className="">
				<div className='card'> 
					<div className='card-content'>
						<h5>Welcome: { this.props.user } </h5>
					</div>					
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.jwt.jwtToken
	}
}

export default connect(mapStateToProps)(NameCard)
