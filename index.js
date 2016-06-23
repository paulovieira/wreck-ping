var Fs = require('fs');
var Wreck = require('wreck');

var uri = 'http://192.168.0.199:7001';

var fiveSeconds   = 1000*5;
var tenSeconds    = 1000*10;
var twentySeconds = 1000*20;

var interval = tenSeconds;
var options = {
	timeout: interval/2
};

// send a get request every x seconds; if we don't have the reply within x/2 seconds, abort and report in the errors log
setInterval(() => {

	Wreck.get(uri, options, function (err, res, payload) {

	    if(err){
	    	Fs.appendFile('errors.log', new Date().toISOString() + ': ' + err.message + '\n');
	    }
	    else{
	    	Fs.appendFile('response.log', payload.toString() + '\n');	
	    }
	});

}, interval);
