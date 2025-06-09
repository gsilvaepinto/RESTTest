const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const commentsRouter = require('./router/comments');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/comments', commentsRouter);
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('public', path.join(__dirname, 'public'));

app.get('/', (req, res) => {
    res.render('comments/home');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`LISTENING ON http://localhost:${PORT}`);
})