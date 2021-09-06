const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

const public = path.resolve(__dirname, "./public");
app.use(express.static(public));

app.listen(PORT, () => {
    console.log("Server initialized at http://localhost:3000")
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve('./views/register.html'))
});

app.get('/sign_in', (req,res)=>{
    res.sendFile(path.resolve('./views/sign_in.html'))
});