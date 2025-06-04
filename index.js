const express = require('express');
const app = express();
const path = require('path');
const usersRouter = require('./router/users');
const commentsRouter = require('./router/comments');

app.use(express.urlencoded({ extended: true }));
app.use('/', usersRouter);
app.use('/comments', commentsRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`LISTENING AT http://localhost:${PORT}`);
})
