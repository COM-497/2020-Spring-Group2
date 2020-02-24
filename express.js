const express = require('express')
const app = express()

var path = _dirname + '/views/'

var router = express.Router()

router.get('/',function(req,res){
  res.sendFile(path+'index.html')

})
app.listen(3000)
