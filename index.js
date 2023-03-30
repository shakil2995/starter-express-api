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
					"latitude": "0.0",
					"longitude": "0.0"
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
var noticeArrIUB = {
	"results": [
		{
			"notice": "Ushuttle bus service is available for all students of IUB",
		}
	],
};
var noticeArrNSU = {
	"results": [
		{
			"notice": "Ushuttle bus service is available for all students of NSU",
		}
	],
};

app.get("/", function (req, res) {
	res.status(200);
	res.send("<h1>Hello world</h1>");
});

//  Coordinates route
app.get("/coords/iub" || "/coords/IUB", function (req, res) {
	res.status(200).send(latLngIub);
});
app.get("/coords/nsu" || "/coords/NSU", function (req, res) {
	res.status(200).send(latLngNsu);
});

//  notice route
app.get("/notice/iub" || "/notice/IUB", function (req, res) {
	res.status(200).send(noticeArrIUB);
});
app.get("/notice/nsu" || "/notice/NSU", function (req, res) {
	res.status(200).send(noticeArrNSU);
});
app.get("/detection", function (req, res) {
	res.status(200).json({ isFraudDetected: false });
});

// app.post(, function (req, res) {
// 	noticeArr.results[0].notice = req.query.notice;
// 	res.send(noticeArr);
// });
app.post("/notice/IUB" || "/notice/iub", function (req, res) {
	noticeArrIUB.results[0].notice = req.query.notice;
	res.send(noticeArrIUB);
});
app.post("/notice/NSU" || "/notice/nsu", function (req, res) {
	noticeArrNSU.results[0].notice = req.query.notice;
	res.send(noticeArrNSU);
});
app.post("/coords/iub", function (req, res) {
	latLngIub.results[0].location.coordinates.latitude = req.query.lat;
	latLngIub.results[0].location.coordinates.longitude = req.query.lng;
	res.send(latLngIub);
});
app.post("/coords/nsu", function (req, res) {
	latLngNsu.results[0].location.coordinates.latitude = req.query.lat;
	latLngNsu.results[0].location.coordinates.longitude = req.query.lng;
	res.send(latLngNsu);
});
app.listen(process.env.PORT || 3000, function (req, res) {
	console.log("server Working");
})
