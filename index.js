//jshint esversion:6
const express = require('express');
const app = express();
// GeolocationCoordinates = require('./models/geolocationCoordinates');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const nodemon = require('nodemon');
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
		{
			"busNo": 1,
			"institute": "IUB",
			"location": {
				"coordinates": {
					"latitude": "23.854191",
					"longitude": "90.405035"
				},
			},
		},
		{
			"busNo": 2,
			"institute": "IUB",
			"location": {
				"coordinates": {
					"latitude": "23.844191",
					"longitude": "90.371035"
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
		{
			"busNo": 1,
			"institute": "NSU",
			"location": {
				"coordinates": {
					"latitude": "23.854191",
					"longitude": "90.405035"
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

app.post("/coords/iub/busno", function (req, res) {
	latLng.results[req.query.busno].location.coordinates.latitude = req.query.lat;
	latLng.results[req.query.busno].location.coordinates.longitude = req.query.lng;
	res.send(latLng);
});
app.listen(process.env.PORT || 3000, function (req, res) {
	console.log("server Working");
})
