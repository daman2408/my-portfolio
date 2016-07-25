var figlet = require('figlet');

figlet('Daman Mangat', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.log.dir(err);
    return;
  }
  console.log(data);
})
