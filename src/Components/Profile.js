import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import NameCard from './ProfilePage/NameCard'
import ProfileBooks from './ProfilePage/ProfileBooks'

class Profile extends Component{

	state = {
		userBooks: '',
		error: '',
		email: ''
	}

	async componentDidMount(){
		try{

			let { token } = this.props || null
			let config = {}	

			if(token){

				config = {
					headers: { 'Authorization': `${token}` }
				}

				let user = await axios.get('/dashboard', config)
				
				this.setState({
					userBooks: user.data.user.books,
					email: user.data.user.email
				})

			}else{

				throw  "No token saved!"
			}

		}catch(error){

			this.setState({
				error: error
			})			

		}
	}

	render(){

		if(!this.props.token){ return <Redirect to='/SignIn' /> }
		
		return (
			<div className="container">
				<div className='row'> 
					<div className='col l4'>
						<NameCard user={ this.state.email } />
					</div>
					<div className='col l7'>
						<ProfileBooks userBooks={ this.state.userBooks } />
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
