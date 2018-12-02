import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BookSchema = new Schema({
    error: String,
    title: String,
    subtitle: String,
    authors: String,
    publisher: String,
    isbn10: String,
    isbn13: String,
    pages: String,
    year: String,
    rating: String,
    desc: String,
    price: String,
    image: String,
    url: String,
})

const UserSchema = new Schema({
	email: String,
	password: String,
	books: [BookSchema],
	date: { type: Date, default: Date.now }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;
