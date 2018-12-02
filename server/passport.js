import passport from 'passport'
import UserModel from './model/index'
import { comparePwd } from './model/hash/index'
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

// jwt
passport.use(new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: 'secret'	
}, async (payload, done) => {
	try{
		const user = await UserModel.findById(payload.sub)

		if(user){
			return done(null, user);
		}else{
			return done(null, false);
		}	

	}catch(err){
		return done(err)
	}
}))


// LOCAL STRATEGY
passport.use( new LocalStrategy({
	usernameField: 'email'
}, async (email, password, done) => {

	try{
		let signedUser = await UserModel.findOne({ email })

		if (!signedUser) {
			return done(null, false, { message: 'Incorrect email.' });
		}

		// gets the logged in user hashed password
		const hashedPwd = signedUser.password
		console.log(hashedPwd)
		// compare password with the user passport
		const realUser = await comparePwd(password, hashedPwd);

		if(!realUser){
			return done(null, false, { message: 'Incorrect password.' });
		}		

		return done(null, signedUser);
	}catch(error){
		return done(error);
	}
}))
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvbGEiLCJzdWIiOiI1YzAyM2YyMzJjN2UwODE0NThmN2MyOTkiLCJpYXQiOjE1NDM2NTExMDg3NjIsImV4cCI6MTU0MzczNzUwODc2Mn0.xlcuXKoPXEWP2ngOBN6DuAxKJp3DjzkUWRtPkOTgSgM
