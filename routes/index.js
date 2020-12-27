var express = require('express');
var router =  express.Router();


router.get('/', ( req,res) => {
    res.locals.title = "COVID-19 Tracker India | Stay Home | Stay Safe";
    res.render('pages/home');
})



module.exports = router;