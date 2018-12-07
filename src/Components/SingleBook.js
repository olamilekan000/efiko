import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

class SingleBook extends Component {


	state = {
		aboutBook: ''
	}

	async componentDidMount(){

		if(this.props.token){

			let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/${this.props.match.params.id}`);
			this.setState({
				aboutBook: res.data
			})
		}

	}

	savedBook = async (e) =>{

		let { token } = this.props || null
		let config = {}

		console.log(token) 		

		if(token){

			config = {
				headers: { 'Authorization': `${token}` }
			}

			await axios.post('/saveBook', this.state.aboutBook, config)
			this.props.history.push('/Profile')

		}else{

			throw  "No token saved!"
		}

	}

	render(){

		if(!this.props.token){ return <Redirect to='/SignIn' /> }

		if(this.state.aboutBook === ''){
			return(
				<div className="center"> <h3> Fetching book... <span role="img">📚</span></h3> </div>
			)
		}

		return(
			<div className='container'>
				<div className="row">
					<div className="col s12 m6 l9">
						<div className="card" style={{ 'marginLeft': '300px',  'marginTop': '50px'}}>
							<div className="card-image">
								<img src={this.state.aboutBook.image } alt='' />
								<span className="card-title" style={{ 'color':'black', 'marginBottom':'-45px' }} >{this.state.aboutBook.title }</span>
								<a className="btn-floating halfway-fab waves-effect waves-light red darken-3"><i className="material-icons" onClick={this.savedBook} >add</i></a>
							</div>
							<div className="card-content">
								<p>About: {this.state.aboutBook.desc }</p>
								<p>Author: {this.state.aboutBook.authors }</p>
								<p>Year: {this.state.aboutBook.year }</p>
								<p>Price: {this.state.aboutBook.price }</p>
								<p>Rating: {this.state.aboutBook.rating }</p>
								<p>Subtitle: {this.state.aboutBook.subtitle }</p>
							</div>
						</div>
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

export default connect(mapStateToProps)(SingleBook)