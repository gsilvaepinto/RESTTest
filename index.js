const express = require('express');
const app = express();
const path = require('path');
const commentRouter = require('./router/comments');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/comments', commentRouter);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('comments/home');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`LISTENING ON: http://localhost:${PORT}`);
})