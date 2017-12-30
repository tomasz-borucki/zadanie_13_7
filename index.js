var fs = require('fs');
fs.readdir('./', function(err, data) {
    console.log(data);
    fs.writeFile('../fold', function(err) {
        if (err) throw err;
        fs.readdir('../fold', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});