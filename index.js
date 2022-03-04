const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// const arr = [{content: "post 1: js is awesome"}, {content: "post 2: cool code"}, {content: "Example post 3"}]

// app.get('/', (req, res)=>{
//     res.render('dev_profile.html',{name: 'John'});
// })

// render static pages using sendfile()
app.get('/posts', (req, res)=>{
    res.sendFile('dev_home.html');
    // res.render('post', {posts: arr});
})

app.listen(8000, ()=>{
    console.log("server listening on 8000");
})