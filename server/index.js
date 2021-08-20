var http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session'); 
const fileUpload = require('express-fileupload')
const path = require('path');

const app = express();
const server = http.createServer(app);

const routes = require('./src/routes/routers');
const config = require('./config');

console.log(path.join(__dirname, 'build'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(session({
    cookie: { 
        maxAge: (60 * 60 * 100000),
        expires: new Date(Date.now() + 60 * 60 * 100000)
    },
    secret: "supppperrraaddmmmin",
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());

app.use('/', routes)

// Connect to MongoDB database
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb://localhost/edvantum`)
  .then(() => {
    server.listen(config.apiServer.port, () => {
        console.log("Server is Listening on port " + config.apiServer.port);
    })
})
