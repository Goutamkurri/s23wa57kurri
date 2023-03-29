var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let x = Math.floor(Math.random() * 100);
    if (req.query.x != undefined) {
        x = req.query.x;
    }

    let num1 = Math.acosh(x);
    let num2 = Math.log1p(x);
    let num3 = Math.tan(x);
    let num4 = Math.sqrt(x);

    res.render('computation', { x:x, acosh:Math.acosh(x), log1p:Math.log1p(x), tan:Math.tan(x), sqrt:Math.sqrt(x)  });
});

module.exports = router;
