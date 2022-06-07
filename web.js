const express = require('express');
const app = express();
const PORT = 8001;

const path = require('path');
app.set('views', path.join(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`);
});