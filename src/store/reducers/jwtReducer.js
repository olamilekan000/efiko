import getJwt from '../../helpers/index'

let initState = {
	jwtToken: getJwt()
}

const jwtReducer = (state = initState, action) => {

	let { token } = action

	switch (action.type) {

		case "GET_TOKEN":
			console.log('GETTIN stoken')
			console.log(token)
			return { ...state, jwtToken: token }
		default:
	 		return state
	}		
}

export default jwtReducer