const getJwtToken = (token) => {
	return {
		type: 'GET_TOKEN', token
	}
}

export default getJwtToken