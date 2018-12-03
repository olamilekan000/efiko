import getJwt from '../../helpers/index'

let initState = {
	jwtToken: getJwt()
}

const jwtReducer = (state = initState, action) => {

	let { token } = action

	if( action.type === 'GET_TOKEN'){
		return {
			...state,
			jwtToken: token
		}

		// console.log('getting token...')
	}
	return state
}

export default jwtReducer