var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    res.send({status: true, message: "The request was successfully served."});
});

module.exports = router;
