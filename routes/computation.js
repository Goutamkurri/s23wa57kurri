var express = require('express');
var router = express.Router();
let x = Math.floor(Math.random());

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.query.x != undefined) {
        x = req.query.x;
    }

    let num1 = Math.acosh(x);
    let num2 = Math.log1p(x);
    let num3 = Math.tan(x);
    let num4 = Math.sqrt(x);

    res.render('computation', { x:x, acosh:num1, log1p:num2, tan:num3, sqrt:num4  });
});

module.exports = router;
