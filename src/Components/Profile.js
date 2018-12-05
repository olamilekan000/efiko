import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import NameCard from './ProfilePage/NameCard'
import ProfileBooks from './ProfilePage/ProfileBooks'

class Profile extends Component{
	render(){
		
		return (
			<div className="container">
				<div className='row'> 
					<div className='col l4'>
						<NameCard />
					</div>
					<div className='col l7'>
						<ProfileBooks />
						<ProfileBooks />
						<ProfileBooks />
						<ProfileBooks />
						<ProfileBooks />
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

export default connect(mapStateToProps)(Profile)
