const express = require('express');
const app = express();
const routes = require('./routes/routes')


app.use('/', routes);

/*app.listen(3932, () => {
  console.log('Example app listening on port 3000!');
});*/