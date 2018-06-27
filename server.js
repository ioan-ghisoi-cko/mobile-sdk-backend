var express = require("express");
var request = require('request-promise');
var http    = require("http");
var app     = express();
var server  = http.createServer(app);
var port = process.env.PORT || 8000


app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.post('/charge', function (req, res) {
    var options = {

        method: 'post',

        url: "http://sandbox.checkout.com/api2/v2/charges/token",

        headers: {
            'authorization': process.env.KEY,
        },

        body: {
            cardToken  : req.body.token,    // CARD TOKEN GENERATE BY THE SDK
            value      : 1000,
            currency   : "USD",
            autoCapture: "N",
            email      : "test@email.com",
            chargeMode : 1,                 // INDICATE A NORMAL CHARGE
        },
        json: true,

    }

    // PERFORM CHARGE REQUEST AND RETURN {id, responseMessage, status}
    request(options)
        .then(function (response) {
            res.send({
                'id': response.id,
                'responseMessage': response.responseMessage,
                'status': response.status,
            });
        })
        .catch(function (err) {
            res.send(err.error);
        });
});

app.post('/charge3d', function (req, res) {
    var options = {

        method: 'post',

        url: "http://sandbox.checkout.com/api2/v2/charges/token",

        headers: {
            'authorization': process.env.KEY,
        },

        body: {
            cardToken  : req.body.token,    // CARD TOKEN GENERATE BY THE SDK
            value      : 1000,
            currency   : "USD",
            autoCapture: "N",
            email      : "test@email.com",
            chargeMode : 2,                 // INDICATE A 3D SECURE CHARGE
        },
        json: true,
        
    }

    // PERFORM CHARGE REQUEST AND RETURN {url} -> the 3D SECURE URL
    request(options)
        .then(function (response) {
            res.send({
                'url': response.redirectUrl,
            });
        })
        .catch(function (err) {
            res.send(err.error);
        });
});

server.listen(port, function () {
    console.log("Node server running on port"+port);
});