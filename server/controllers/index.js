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

			// exchanges a user for a token
			let authToken = token(savedUser);
			return res.json({ "message": "You have been succesfully saved", "password": newUser.password, "token": authToken, savedUser });		

		}catch(err){
			return res.json({ error })
		}
	},
	logIn: (req, res) => {
		try{

			//exchange user dtails with a token
			const user = req.body
			const tokenGen = token(user);
			return res.json({ tokenGen, user })

		}catch(error){
			return res.json({ error })
		}

	},
	dashboard:  (req, res) => {
		return res.json({ "message": "Dashboard"})
	},
	saveBook:  (req, res) => {
		return res.json({ "message": "Save Books"})
	},	
}
