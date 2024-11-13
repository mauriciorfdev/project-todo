const express = require('express')

const app = express();

const posts = [
    {id: 0, title: 'Post One'},
    {id: 1, title: 'Post Two'},
    {id: 2, title: 'Post Three'},
]

app.get('/', (req, res) => {
    res.send('Hello world...');
});

app.get('/users', (req, res) => {
    res.json({msg: 'hello'});
})

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server listen on port ${PORT}...`) })