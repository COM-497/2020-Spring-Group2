const express = require('express');
const sendMail = require('./mail');
const app = express();
var router = express.Router();
const path = require('path')



//Data parsing: when html gets data, able to process 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//recieving data from client using /email route
app.post('/email',(req,res) => {
    const {subject, email, text} = req.body;
    sendMail(email, subject, text,function(err,data){
        if(err){
            res.status(500).json({message: "Internal Error: Please Contact via Email"});
        }
        else{
            res.json({message:"Message has been recieved."});
        }
});
    res.json({message: "Message received!"})
  // res.redirect('/contact-success');
});

var path1 = __dirname + '/views/';

app.use('/',router);
app.use(express.static('views'));

//app.get('/contact-success',function(req,res){
  //  res.sendFile(path.join(__dirname,'views','contact-success.html'));
//});

router.get('/',function(req,res){
    res.sendFile(path1+'index.html');
});

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
router.get('/login',function(req,res){
    res.sendFile(path1+'login.html');
});
app.listen(3000,function(){
    console.log('This is a test on port 3000');
});
