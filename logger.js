var express = require('express');
require("dotenv").config();
const cookieParser = require("cookie-parser")
require("./middleware/database").connect();

const bodyParser = require('body-parser');
var app = module.exports = express();
const path = require('path');
const cors = require("cors");
app.use(cors());
app.use(cookieParser());
 
const mainApi = require('./router/mainApi')
const { API_PORT } = process.env;
const port = API_PORT;
var router = express.Router();
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

router.use('/api', mainApi)
// express-winston logger makes sense BEFORE the router
// Now we can tell the app to use our routing code:
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}))
app.use('/upload', express.static('upload'));

app.use(router);
app.use('/uploads', express.static('uploads'));
// Optionally you can include your custom error handler after the logging.

app.listen(port, function(){
  console.log("logger listening on port %d in %s mode", this.address().port, app.settings.env);
});