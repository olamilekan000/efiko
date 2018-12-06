import UserModel from '../model/index'
import { hashPwd } from '../model/hash/index'
import JWT from 'jsonwebtoken'

// jwt
let token = newUser => {
	return JWT.sign({
		iss: 'ola',
		sub: newUser._id,
		iat: new Date().getTime(),
		exp: new Date().setDate( new Date().getDate() + 1)
	}, 'secret');	
}

module.exports = {

	signUp: async (req, res) => {
		try{
		
			console.log(req.body)

			let { email, password } = req.body;

			let existingUser = await UserModel.findOne({ email })

			console.log( await hashPwd(password))

			if(existingUser){
				return res.json({ "message": "This user already exists"})
			}

			let hashedPwd = await hashPwd(password)
			req.body.password = hashedPwd

			const newUser = new UserModel(req.body)

			let savedUser = await newUser.save()

			console.log('saved user: ', savedUser)

			// exchanges a user for a token
			let authToken = token(savedUser);
			return res.json({ "message": "You have been succesfully saved", "password": newUser.password, "token": authToken, savedUser });		

		}catch(error){
			return res.json({ error })
		}
	},
	logIn: (req, res) => {
		// console.log(req.user)
		try{

			//exchange user dtails with a token
			const { user } = req
			const tokenGen = token(user);
			return res.json({ tokenGen })

		}catch(error){
			return res.json({ error })
		}

	},
	dashboard:  (req, res) => {
		console.log(req.user.books)
		let { user, books } = req

		return res.json({ "message": "Dashboard", user, books })
	},
	saveBook:  (req, res) => {
		try{
			console.log('user body data => ', req.body)		
			req.user.books.push(req.body)
			console.log('user book => ', req.user.books)

			return res.json({ "message": "Save Books"})			

		}catch(err){
			res.json({ "error": "Couldn't save book"})
		}
	},	
}
