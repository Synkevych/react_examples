function errorHandler(error, request, response, next) {
	return response.status(error.status || 500).json({
		error: {
			massage: error.massage || 'Opps! Something went wrong!'
		}
	});
}

module.exports = errorHandler;
