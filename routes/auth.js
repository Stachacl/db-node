const router = require('express').Router();
const User = require('../model/User');


router.post('/register', (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })
})
// router.post('/login')
module.exports =router;