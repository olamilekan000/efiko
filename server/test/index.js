const model = require('../model/index');
const hash = require('../model/hash/index')
const assert = require('assert');

describe("saves a user to the db", () => {
	it("saves a uesr to the db", () => {
		const newUser = new model({
			email: "nicolo@yahoo.com",
			password: hash("123ola")
		})

		newUser.save().then((done) => {
			assert(newUser.isNew() === false);
			done();
		})
	})
})