var fs = require('fs');

const file = fs.readFile(process.argv[2], 'utf8', function countLines(err, data) {
  if (err) {
    return console.log(err);
  }
  const lineArray = data.split('\n').length - 1;
  console.log(lineArray);
});
