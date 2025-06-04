const express = require('express');
const router = express.Router();

router.route('/user/:id')
    .get((req, res) => {
        res.send(`GET USER WITH ID ${req.params.id}`);
    })
    .post((req, res) => {
        res.send(`POST USER WITH ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`DELETE USER WITH ID ${req.params.id}`);
    })

router.param('id', (req, res, next, id) => {
    console.log(`Intercepted ID param: ${id}`);
    next();
})

module.exports = router;