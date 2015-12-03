// Hacked from this resource: https://gist.github.com/joemccann/780256

var fs = require("fs");

function jsFiles(path, outFilename, cb) {
  fs.readdir(path, function(err, files) {

    var files = [];

    // Check for js files and push on the array if it's a match.
    fs.readdirSync(path).forEach(function (file) {
      file.substr(-2).match(/js/) && files.push('./js/' + file)
    })

    fs.writeFile(__dirname + '/data/' + outFilename, 'module.exports = ' + JSON.stringify( files ), function(err) {
      if (err) throw err;
      cb && cb("Sweet.");
    });

  });
}

jsFiles('./js', "file-list.js", function(message) {
    console.log(message);
});
