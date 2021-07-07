const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
var request = require('request');
const xmlParser = require('xml2json');
var Set = require("collections/set");
var moment = require('moment');
var xml2js = require('xml2js');
const { stringify } = require("querystring");
var xml2jsParser = new xml2js.Parser();
app.use(express.static("marketing-cloud-query-app"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/loginpage.html'));
})

app.post("/WebAppAPI", async (reqCall, resCall) => {
  var WebAppAPI = reqCall.body.WebAppAPI;
  console.log('WebAppAPI : ' + WebAppAPI);
  var options = {
    'method': 'GET',
    'url': 'https://mc6vgk-sxj9p08pqwxqz9hw9-4my.auth.marketingcloudapis.com/v2/authorize?response_type=code&client_id=owvl4axdrghyuap2f04bhjz2&redirect_uri=https://www.heroku.com/'
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    resCall.send(response.body);
    
  });
})

app.set('view engine', 'html');

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running."));
