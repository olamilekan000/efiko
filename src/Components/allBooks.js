import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Book from './Book'

import SearchBar from './SearchBar'

class AllBooks extends Component{

	state = {
		books:""
	}

	async componentDidMount(){	

		if(this.props.token){
			let response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/new');
			this.setState({
				books: response.data.books
			})
		}

	}

	searchAction = (booksData) => {
		this.setState({
			books: booksData
		})
	}

	render(){

		if(!this.props.token) { return <Redirect to='/SignIn' /> }

		let books

		if(this.state.books === ""){

			books = <div className="center"> <h3> Fetching all books... 📚 </h3> </div>

		}else if(this.state.books.length === 0){

			books = (<div className="center" style={{ marginTop: '100px' }}> <h3> Oops looks like that book doesn't exist... 😞</h3> </div>)

		}else{

			books = (<div>
						<div className="row">
							<Book book={this.state.books} />
						</div>		
					</div>)			
		}


		// renders any of the conditions above
		return (
			<div>
				<div className="container" style={{ marginTop: '50px' }}>
					<SearchBar bookStateAction={ this.searchAction } />
				</div>			
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

export default connect(mapStateToProps)(AllBooks)