/**
 * Created by dylanlafrenz on 3/27/17.
 */
var express =require('express');
var app = express();
path = require('path');
app.get('/*',function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
var server  = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("example app listening at http://%s:%s",host,port)
});