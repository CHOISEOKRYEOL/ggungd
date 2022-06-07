const express = require('express');
const app = express();
const PORT = 8001;
app.set('views', __dirname + '/views');
app.set('view engine', 'index.html');
app.get('/', (req, res) => {
  res.render('index.html');
})
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`);
})