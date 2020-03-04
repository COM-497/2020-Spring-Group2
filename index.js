var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/';

app.use('/',router);

app.use(express.static('views'));
router.get('/',function(req,res){
    res.sendFile(path+'index.html');
});

router.get('/about',function(req,res){
    res.sendFile(path+'about.html');
});

router.get('/team',function(req,res){
    res.sendFile(path+'team.html');
});

router.get('/product',function(req,res){
    res.sendFile(path+'product.html');
});

app.listen(3000,function(){
    console.log('This is a test on port 3000');
});