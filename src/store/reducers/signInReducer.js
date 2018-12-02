let initState = {
	sigInData: {}
}

const SignInReducer = (state = initState, action) => {
	let { tokenGen } = action

	switch (action.type) {

		case "SIGN_IN_USER":
			console.log(tokenGen)
			return { ...state, sigInData: tokenGen }
		default:
	 		return state
	}	

}

export default SignInReducer