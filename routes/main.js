const path = require('path');
const rootDir = require('../util/path')


const express = require('express');
const router = express.Router();


router.get('/', (req,res,next) => {
    res.render(path.join(rootDir, 'views', 'index'), {path:'/'});
    // console.log(req.device.type)
});

router.get('/check', (req,res,next) => {
    res.render(path.join(rootDir, 'views', 'index'), {path:'/check'});
});

module.exports = router;