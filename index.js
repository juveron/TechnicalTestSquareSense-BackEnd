const express = require('express')
const app = express()
const occupancy = require('./occupancy.json')

app.use(express.json())

app.get('/occupancy', (req,res) => {
	res.status(200).json(occupancy)
})

// app.get('/occupancy/:sensor', (req,res) => {
// 	const sensor = req.params.id
// 	const occupancy = occupancy.find(occupancy => occupancy.id === sensor)
// 	res.status(200).json(occupancy)
// })

app.post('/occupancy', (req,res) => {
	res.status(200).json(occupancy)
})

// ==========================FOR UNIT TEST========================== \\

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
const router = express.Router();

router.get('/',function(req,res){
	res.json({"error" : false, "message" : "Hello !"});
});

router.post('/add',function(req,res){
	res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

app.use('/',router);

app.listen(8080, () => {
	console.log("The server is running on")
})
