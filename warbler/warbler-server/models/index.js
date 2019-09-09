const mongoose = require("mongoose");
mongoose.set("dubug", true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/warbler', {
	keepAlive: true,
	useNewUrlParser: true
});

module.exports.User = require("./user");