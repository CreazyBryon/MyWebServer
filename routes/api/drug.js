var express = require('express');
var router = express.Router();

/* GET home page. 
http://localhost:3000/api/drug/
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'drug home' });
});

/* GET data http://localhost:3000/api/drug/info */
router.get('/info', function(req, res, next) {
  res.send({name:"drug entity",number:"1234"});
});

/* GET data http://localhost:3000/api/drug/data */
router.get('/data', function(req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
res.jsonp({status: 200, message: "这是一个JSONP接口", data:[]});
    } else {
        res.json({status: 200, message: "这是一个JSON接口", data:[]});
    }
});
module.exports = router;
