let initState = {
	signUpUserData: null
}

const signUpReducer = (state = initState, action) => {

	const { userSignupData, err } = action

	switch(action.type) {
		case "SIGN_UP_USER":
			console.log(userSignupData)
			return { ...state, signUpUserData: userSignupData }
		case "SIGN_UP_USER_ERROR":
			console.log(err)
			return state	
		default:
	 		return state		
	}
}

export default signUpReducer