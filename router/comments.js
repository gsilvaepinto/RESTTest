const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

let comments = [
    {id: uuid(), username: 'Todd', comment: 'that is very funny'},
    {id: uuid(), username: 'Maria', comment: 'maybe tomorrow'},
    {id: uuid(), username: 'Sara', comment: 'i love elon'},
]

function findCommentById(id){
    return comments.find(c => c.id === id);
}

function deleteCommentById(id){
    return comments.filter(c => c.id !== id);
}

router.route('/')
    .get((req, res) => {
        res.render('comments/comments', {comments});
    })
    .post((req, res) => {
        const {username, comment} = req.body;
        if (!username || !comment) {
            return res.status(400).render('comments/newComment', { error: 'Please fill in all fields.' });
        }
        comments.push({username, comment, id: uuid()});
        res.redirect('/comments');
    })

router.get('/newComment', (req, res) => {
    res.render('comments/newComment');
})

router.route('/:id')
    .get((req, res) => {
        const {id} = req.params;
        const comment = findCommentById(id);
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
    .delete((req, res) => {
        const {id} = req.params;
        comments = deleteCommentById(id);
        res.redirect('/comments');
    })

router.get('/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = findCommentById(id);
    if (!comment){
        return res.status(404).send('No comment found');
    }
    res.render('comments/edit', {comment});
})

module.exports = router;