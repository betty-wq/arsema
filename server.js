//Dependencies
const express = require('express');
const AcuityScheduling = require('acuityscheduling');
const methodOverride  = require('method-override');
const session = require('express-session')
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const bcrypt = require('bcryptjs');

//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// Create an instance of Acuity for accessing the API:
const acuity = AcuityScheduling.basic({
    "userId": process.env.ACUITY_USER_ID,
    "apiKey": process.env.ACUITY_API_KEY
  });


//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/arsema';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Index
app.get('/logs', (req, res)=>{
    res.render('Index')
})

// Events
app.get('/logs/Events', (req, res)=> {
      res.render('Events');
    });

// About us
app.get('/logs/Aboutus', (req, res)=>{
    res.render('Aboutus');
});

// Photo
app.get('/logs/Photo', (req, res)=>{
    res.render('Photo');
});

//Liturgy
app.get('/logs/Videos', (req, res)=>{
    res.render('Videos');
});

//Contact
app.get('/logs/Contact', (req, res)=>{
    res.render('Contact');
});

//Support us
app.get('/logs/Supportus', (req, res)=>{
    res.render('Supportus');
});

//Services
app.get('/logs/Services', (req, res)=>{
    res.render('Services');
});

//Membership
app.get('/logs/Membership', (req, res) =>{
    res.render('Membership')
})

//Gallery
app.get('/logs/Gallery', (req, res) =>{
    res.render('Gallery')
})

//Baptism
app.get('/logs/Baptism', (req, res) =>{
    res.render('Baptism')
})

//Wedding
app.get('/logs/Wedding', (req, res) =>{
    res.render('Wedding')
})

//Volunteer
app.get('/logs/Volunteer', (req, res) =>{
    res.render('Volunteer')
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

