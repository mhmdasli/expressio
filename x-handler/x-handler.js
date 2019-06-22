/*
Handles requests from framework.js
 */
var Twig = require('twig');    // Render function
twig = Twig.twig;
var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'partials'));
app.set('view engine', 'twig');
var XHandler ={};

XHandler.handle = function(req,res){

    var func =  req.header('x-project-request-handler');
    var partial =  req.header('x-project-request-partials');
    try {
        XHandler[func](req,res,partial);
    }catch (e) {
        throw e;
    }
};

XHandler.onClickMe = function(req,res,partial)
{
    app.render(partial,{message:req.param('name')},function (err,html) {
    
        if (err) throw err;
        res.json({'mypartial':html});
    })
};
module.exports = XHandler;
