const express = require('express');
const sendMail = require('./mail');
var router = express.Router();
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();

// Passport Config
require('./config/passport')(passport);



//DB Config
const db = require('./config/keys').MongoURI;

//Contect to Mongo
mongoose.connect(db , {useNewUrlParser:true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//EJS 
app.use(expressLayouts);
app.set('view engine' , 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
//Routes 
app.use('/',require('./routes/index'));
app.use('/users', require('./routes/users'));

//below is for contact us html
//Data parsing: when html gets data, able to process 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//recieving data from client using /email route
app.post('/email',(req,res) => {
    const {subject, email, text, name} = req.body;
    sendMail(email, subject, text, name,function(err,data){
        //res.render('contact-success');
        if(err){
            res.status(500).json({message: "Internal Error: Please Contact via Email"});
        }
        else{
            res.json({message:"Message has been recieved."});
          
        }
});
    res.json({message: "Message received!"})
//res.render('contact-success',{msg:'Email has been sent successfully.'})
  //  return res.redirect('/contact-success'); 
});

var path1 = __dirname + '/views/';

app.use('/',router);
app.use(express.static('views'));

app.get('/contact-success',function(req,res){
 res.sendFile(path.join(__dirname,'views','contact-success.html'));
});

//router.get('/',function(req,res){
  //  res.sendFile(path1+'index.html');
//});

router.get('/about',function(req,res){
    res.sendFile(path1+'about.html');
});

router.get('/team',function(req,res){
    res.sendFile(path1+'team.html');
});

router.get('/product',function(req,res){
    res.sendFile(path1+'product.html');
});
app.get('/contactus',function(req,res){
    res.sendFile(path.join(__dirname,'views','contactus.html'));
});
//router.get('/login',function(req,res){
  //  res.sendFile(path1+'login.html');
//});





app.listen(3000,function(){
    console.log('This is a test on port 3000');
});