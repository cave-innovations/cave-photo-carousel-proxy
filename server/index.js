const express = require('express');
const app = express();
const port = 4000;

app.use('/listing/:id', express.static('public'));
app.use(express.static('public'));
app.use(express.static('node_modules'));


app.listen(port, () => { console.log(`Listening on port ${port}`); });