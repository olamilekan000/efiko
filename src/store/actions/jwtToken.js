const getJwtToken = (token) => {
	return (dispatch, getState) => {
		console.log(token)
		dispatch({ type: 'GET_TOKEN', token })
	}
}

export default getJwtToken