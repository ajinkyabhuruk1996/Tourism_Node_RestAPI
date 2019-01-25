const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
//origin: 'http://localhost:4200',
//http://13.234.50.32:5514
const corsOptions = {
  origin: 'http://13.234.50.32',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

let customerRouter = require('./app/routes/customer.routes.js');
app.use('/', customerRouter);

// Create a Server
let server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})