//jshint esversion:6
const express = require('express');
const app = express();
// GeolocationCoordinates = require('./models/geolocationCoordinates');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// app.use(cors());
var latLngIub = {
	"results": [
		{
			"busNo": 0,
			"institute": "IUB",
			"location": {
				"coordinates": {
					"latitude": "23.864191",
					"longitude": "90.381035"
				},
			},
		},


	],
};
var latLngNsu = {
	"results": [
		{
			"busNo": 0,
			"institute": "NSU",
			"location": {
				"coordinates": {
					"latitude": "23.864191",
					"longitude": "90.381035"
				},
			},
		},


	],
};

app.get("/", function (req, res) {
	res.status(200);
	res.send("<h1>Hello world</h1>");
});
app.get("/coords/iub" || "/coords/IUB", function (req, res) {
	res.status(200).send(latLngIub);
});
app.get("/coords/nsu" || "/coords/NSU", function (req, res) {
	res.status(200).send(latLngNsu);
});

app.post("/coords/iub", function (req, res) {
	latLng.latLngIub[0].location.coordinates.latitude = req.query.lat;
	latLng.latLngIub[0].location.coordinates.longitude = req.query.lng;
	res.send(latLngIub);
});
app.post("/coords/nsu", function (req, res) {
	latLng.latLngNsu[0].location.coordinates.latitude = req.query.lat;
	latLng.latLngNsu[0].location.coordinates.longitude = req.query.lng;
	res.send(latLngNsu);
});
app.listen(process.env.PORT || 3000, function (req, res) {
	console.log("server Working");
})
