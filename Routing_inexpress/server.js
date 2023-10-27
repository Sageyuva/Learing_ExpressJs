const express = require('express');
const app = express();

app.use(function(req, res, next) {
    next()

})


app.get('/', (req, res) => {
    res.send("Hello World of  EXPRESS JS");
});
app.get('/Profile', (req, res) => {
    res.send("Hello from Profile");
});



app.listen(3001);