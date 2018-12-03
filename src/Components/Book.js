import React from 'react'
import { Link } from 'react-router-dom';

const Book = ({book}) => {

	let	eachBook = book.slice(0, 8).map( books => {
		return (
			<div key={ books.isbn13 }>
				<div>
				    <div className="col s12 m7 l6">
				      <div className="card">
				        <div className="card-image">
				          <img src={books.image} alt='' />
				        </div>
				        <div className="card-content">
				          <span className="card-title">{ books.title }</span>
				          <p>{ books.subtitle} </p>
				          <p>{ books.price} </p>
				        </div>
				        <div className="card-action">
				          <Link to={`/${books.isbn13}`} ><button className='btn red darken-3 '>View</button></Link>
				        </div>
				      </div>
				    </div>
				  </div>				
			</div>
		)
	})

	return(
		<div className="container">
			{ eachBook }
		</div>
	)
}

export default Book