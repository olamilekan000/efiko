import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class NameCard extends Component{
	render(){
		
		return (
			<div className="">
				<div className='card'> 
					<div className='card-content'>
						blaofofioiroigforrg0igg0grrg
						olejigfoirorioriogiorgir]ojgriorg[\
						orjg[ojgogrjgorjgor\
						ojgrojrgojrgorggr]]\
						g;igjriojgroijgogorioiroigoig
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
