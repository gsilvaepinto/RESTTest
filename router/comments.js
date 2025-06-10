const express = require('express');
const router = express.Router();
const { v4: uuidv, parse } = require('uuid');

const comments = [
    {id: uuidv(), username: 'Todd', comment: 'i do not agree with that'},
    {id: uuidv(), username: 'Maria', comment: 'maybe yes'},
    {id: uuidv(), username: 'Todd', comment: 'your should not to that'},
]

router.route('/')
    .get((req, res) => {
        res.render('comments/comments', {comments});
    })
    .post((req, res) => {
        const {username, comment} = req.body;
        comments.push({username, comment, id: uuidv()});
        res.redirect('/comments');
    })

router.route('/new')
    .get((req, res) => {
        res.render('comments/newComment');
    })

router.route('/:id')
    .get((req, res) => {
        const {id} = req.params;
        const comment = comments.find(c => c.id === (id));
        if (!comment){
            return res.status(404).send('NO COMMENT FOUND');
        }
        res.render('comments/show', {comment});
    })
    .patch((req, res) => {
        const {id} = req.params;
        const newComment = req.body.comment;
        const foundComment = comments.find(c => c.id === id);
        if (!foundComment){
            return res.status(404).send('Comment not found');
        }
        foundComment.comment = newComment;
        res.redirect('/comments');
    })

router.get('/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    if (!comment){
        return res.status(404).send('NO COMMENT FOUND');
    }
    res.render('comments/edit', {comment});
})

module.exports = router;
