const express = require('express')
const app = express()
const occupancy = require('./occupancy.json')
const cors = require('cors')

app.use(express.json())


// ========================== CORS ========================== \\

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200
}

// ========================== REQUEST ========================== \\

app.get('/api/occupancy', cors(corsOptions), function(req, res) {
	if (!occupancy)
		res.status(400).json("invalid request message parameters or the data requested is not exist")

	const param = req.query
	const sensor = occupancy.filter(obj => {
		return obj.sensor === param.sensor
	})

	if (!param.sensor && sensor.length < 1)
		res.status(400).json("invalid request message parameters or the data requested is not exist")

	if (param.sensor !== undefined && sensor.length > 0 && sensor[0].sensor === param.sensor)
		res.status(200).json({ "inside": sensor[0].in + sensor[0].out })
	else if (sensor[0].sensor !== param.sensor) res.status(400).json("invalid request message parameters or the data requested is not exist")
});

app.post('/api/occupancy', cors(corsOptions), (req,res) => {
	res.status(200).json(occupancy)
})

app.listen(8080, () => {
	console.log("The server is running on")
})
