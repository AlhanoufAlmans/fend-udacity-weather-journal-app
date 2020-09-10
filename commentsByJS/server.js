// Setup empty JS object to act as endpoint for all routes
Data = [];

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
//   }).listen(8080);



// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
const cors= require('cors');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port =8000;
const server = app.listen(port,isWorking);
// Callback to debug
function isWorking(){
console.log(`server runs: ${port}`);
}
// Initialize all route with a callback function
app.get('/all',sendData);
// Callback function to complete GET '/all'
function sendData(req,res){
res.send(Data);
}
// Post Route
  app.post('/add',addData);
  function addData(res, req){
console.log(req.body);
info ={
  date: req.body.date,
  temp: req.body.temp,
  cont: req.body.cont
}
Data.push(info);

  }