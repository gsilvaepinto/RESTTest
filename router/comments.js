const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const comments = [
    {id: uuid(), username: 'Todd', comment: 'example1'},
    {id: uuid(), username: 'Maria', comment: 'example2'},
    {id: uuid(), username: 'John', comment: 'example3'},
]

router.route('/')
    .get((req, res) => {
        res.render('comments/comments', {comments});
    })
    .post((req, res) => {
        const {username, comment} = req.body;
        comments.push({username, comment, id: uuid() });
        res.redirect('/comments');
    })

router.route('/compose')
    .get((req, res) => {
        res.render('comments/compose');
    })

router.route('/:id')
    .patch((req, res) => {
        const { id } = req.params;
        const newCommentText = req.body.comment;
        const foundComment = comments.find(c => c.id === id);
        if (!foundComment) {
            return res.status(404).send('Comment not found');
        }
        foundComment.comment = newCommentText;
        res.redirect('/comments');
    });

router.route('/:id/edit')
    .get((req, res) => {
        const { id } = req.params;
        const comment = comments.find(c => c.id === id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.render('comments/edit', { comment }); 
    });

router.route('/:id')
    .get((req, res) => {
        const {id} = req.params;
        const comment = comments.find(c => c.id === id);
        if (!comment){
            return res.status(404).send('NO COMMENT FOUND');
        }
        res.render('comments/show', {comment});
    })

module.exports = router;