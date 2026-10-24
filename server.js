require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.static('public'));

app.post('/user', (req, res) =>{
    const { name, email } = req.body || {};
    if (!name || !email) return res.status(400).json({error: 'missing field'});
    res.status(200).send(`Hello, ${name}!`);
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`User ${id} profile`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});