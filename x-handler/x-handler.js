/*
Handles requests from framework.js
 Here we can add methods as controllers to handle
 the frontend post requests made by the x-handler client
 */
var Twig = require('twig');
twig = Twig.twig;
var express = require('express');
var path = require('path');
var app = express();
var socket = require('./socket');
// set path to the app folder
app.set('views', path.join(__dirname, 'app'));
// view engine setup
app.set('view engine', 'twig');

// XHandler Object
var XHandler = {};

XHandler.handle = function (req, res) {
    
    var func = req.header('x-project-request-handler');
    var partial = req.header('x-project-request-partials');
    try {
        XHandler[func](req, res, partial);
    } catch (e) {
        throw e;
    }
};

XHandler.onSignIn = function (req, res) {
    socket.addUser(req.param('username'));
    app.render('index', {users: socket.users, user: {name:req.param('username')}}, function (err, html) {
        if (err) throw err;
        res.json({'app': html});
    })
};

module.exports = XHandler;
