var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = process.env.PORT || 3000;


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
indexRoute = require('./routes/index');
app.use('/', indexRoute);

var socketData = require('./x-handler/socket');
io.on('connection', function (socket) {
    io.sockets.emit('userCount', {userCount: socketData.userCount,users: socketData.users});
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        socketData.onDisconnect();
        io.sockets.emit('userCount', {users: socketData.users});
    });
})
;
http.listen(port, function () {
    console.log('listening on *:' + port);
});

