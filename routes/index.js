var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index');
});
router.post('/',function (req,res,next) {
    if (req.header('x-project-request-handler') === 'onClickMe'){
        res.end('this is test response');
    }
})
module.exports = router;
