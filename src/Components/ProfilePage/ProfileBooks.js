import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import getJwt from '../../helpers/index.js'
import jsonwebtoken from 'jsonwebtoken'
import axios from 'axios'

class ProfileBooks extends Component{

	state = {

	}


	deleteBook = async (_id, e) => {
		e.preventDefault() 
		
		let { token } = this.props || null
		let config = {}

		if(token){

			config = {
				headers: { 'Authorization': `${token}` }
			}

			await axios.post('/delete', { _id }, config)
			console.log(this.props)
			window.location.refresh()

		}else{

			throw  "No token saved!"
		}


	}

	render(){

		if(!this.props.token){ return <Redirect to='/SignIn' /> }

		let { userBooks } = this.props

		let books

		if(userBooks.length === 0){	
			return books = (
				<div className='card'>
					<div className='card-content'>
						<h5>You have no books saved yet </h5>
					</div>
				</div>
			)
		}

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
								<button className='btn red darken-3' onClick={ e => { this.deleteBook(book._id, e) } } > DELETE </button>
							</div>				
						</div>
					</div>
				)
			})
		}else{
			books = (
					<div style={{ 'marginTop':'300px', 'marginLeft':'100px'}} >
					<div className='container'>
					    <div className="preloader-wrapper big active">
					      <div className="spinner-layer spinner-blue">
					        <div className="circle-clipper left">
					          <div className="circle"></div>
					        </div><div className="gap-patch">
					          <div className="circle"></div>
					        </div><div className="circle-clipper right"></div>
					          <div className="circle"></div>
					        </div>
					      </div>				
					</div>					
				</div> 
			)
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
