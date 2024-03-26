const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(
		`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uloifkk.mongodb.net/`
	)
	.then(() => {
		console.log('successfully connection created');
	})
	.catch((error) => {
		console.log('some error occured ' + error);
	});
