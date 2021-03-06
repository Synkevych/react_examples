const dotenv = require('dotenv').config(); // load our invar variables

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const db = require('./models');
const messagesRouters = require('./routes/messages');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = process.env.PORT || 8082;

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use(
	'/api/users/:id/messages',
	loginRequired,
	ensureCorrectUser,
	messagesRouters
);

app.get('/api/messages', loginRequired, async function(req, res, next) {
	try {
		let messages = await db.Message.find()
			.sort({ createdAt: 'desc' })
			.populate('user', {
				username: true,
				profileImageUrl: true
			});
		return res.status(200).json(messages);
	} catch (error) {
		return next(error);
	}
});
// next is callback function
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
	console.log(`Server runing on port ${PORT}`);
});
