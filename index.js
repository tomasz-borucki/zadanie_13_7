var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

fs.readdir('./', function(err, files) {
	if (err) throw err;
	console.log(files)
	emitter.emit('saveDir', files);
});

emitter.on('saveDir', function(files) {
	fs.writeFile('./txt', files, function(err) {
		if (err) throw err;
		console.log('Zapisano!');
	});
});