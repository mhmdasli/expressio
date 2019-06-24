/*
Handles requests from framework.js
 */
var Twig = require('twig');    // Render function
twig = Twig.twig;
var express = require('express');
var path = require('path');
var app = express();
var socket = require('./socket');
// view engine setup
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'twig');
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
    app.render('pages/index', {users: socket.users, user: {name:req.param('username')}}, function (err, html) {
        if (err) throw err;
        res.json({'app': html});
    })
};

module.exports = XHandler;
