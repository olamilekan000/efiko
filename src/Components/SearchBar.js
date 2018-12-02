import React, { Component } from 'react'
import axios from 'axios';

class SearchBar extends Component{

	state = {
		searchBooks:""
	}


	SearchBarField = e =>{
		
		this.setState({
			searchBooks: e.target.value
		})
	}

	 search = async e => {
		e.preventDefault()
		
		this.setState({
			searchBooks: ''
		})

		let res = ''
		
		if( res === ''){
			this.props.bookStateAction(res)
		}

		res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/${this.state.searchBooks}`);
		console.log(res)
		this.props.bookStateAction(res.data.books)
	}

	render(){
		return (
			<nav className="white">
			    <div className="nav-wrapper">
			      <form onSubmit={ this.search } >
			        <div className="input-field">
			          <input id="search" placeholder="Search for books" type="search" required onChange={ this.SearchBarField } value={ this.state.searchBooks } />
			          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
			          <i className="material-icons">close</i>
			        </div>
			      </form>
			    </div>				
			</nav>

		)
	}
}

export default SearchBar