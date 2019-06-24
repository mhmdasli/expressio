var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var socket = {
    users: [],
    userCount: 0,
    run: function () {
    },
    addUser: function (name) {
        this.userCount++;
        this.users.push(name);
    },
    onConnection: function () {
    
    },
    onDisconnect: function (name) {
        this.userCount--;
        this.users.splice(this.users.indexOf(name))
    }
    
}

module.exports = express = socket;
