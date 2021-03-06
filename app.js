const express = require('express');
const app = express();
const routes = require('./routes/routes')


app.use('/', routes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
