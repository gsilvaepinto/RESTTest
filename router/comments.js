const express = require('express');
const router = express.Router();

const comments = [
    { username: 'Todd', comment: 'lol that is so funny!' },
    { username: 'Skyler', comment: 'I like to go shopping' },
    { username: 'Rita', comment: 'pls delete your account, todd' }
];

router.route('/')
    .get((req, res) => {
        res.render('comments', {comments});
    })
    .post((req, res) => {
        const {username, comment} = req.body;
        comments.push({username, comment});
        res.redirect('/comments');
    })

router.get('/new', (req, res) => {
    res.render('new');
})

module.exports = router;