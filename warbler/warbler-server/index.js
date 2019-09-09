require("dotenv").config();  // load our invar variables 
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = 8082;

app.use(cors());
app.use(bodyParser.json())
app.use("/api/auth", authRoutes);

// next is callback function 
app.use(function(req, res, next){
	let err = new Error("Not Fount");
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen( PORT, function(){
	console.log(`Server runing on port ${PORT}`);
})