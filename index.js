const tracer = require('dd-trace').init({

    //service:'new-service-name',    // set service-name
    //env:`node_temp_env`,           // set env-name
    //debug:true,                   //if you want to enable debug mode
    logInjection: true, 
    hostname: 'datadog-agent',     //name of the datadog-container
    port: 8126,
    analytics: true
    });

let express = require('express');

// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes").default
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://mongo:27017/resthub', { useNewUrlParser: true }, function(err, db) {
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});
var db = mongoose.connection;

// Setup server port
//var port = process.env.PORT || 4000;
var port = 4000;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes)


// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

