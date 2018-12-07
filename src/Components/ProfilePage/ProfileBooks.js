import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import getJwt from '../../helpers/index.js'
import jsonwebtoken from 'jsonwebtoken'

class ProfileBooks extends Component{
	
	render(){

		let { userBooks } = this.props

		let books

		if(userBooks){

			books = userBooks.map( book => {
				return (
					<div className='card' key={ book._id } >
						<div className='card-content'>
							<div className="card-image">
								<img src={ book.image } alt='' />
								<span className="card-title" style={{ 'color':'black', 'marginBottom':'-45px' }} >{ book.title }</span>
							</div>
							<div className="card-content">
								<p>About: { book.desc }</p>
								<p>Author: { book.authors }</p>
							</div>					
							<div>
								<button className='btn red darken-3'> DELETE </button>
							</div>				
						</div>
					</div>
				)
			})
		}else{
			books = <div> getting your books</div>
		}

		return (
			<div className="">
				{ books }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.jwt.jwtToken
	}
}

export default connect(mapStateToProps)(ProfileBooks)
