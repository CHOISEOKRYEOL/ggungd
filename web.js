const express = require('express');
const app = express();
const PORT = 8001;
app.set('views', __dirname + '/views');
app.set('public', __dirname + '/public');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.get('/', (req, res) => {
  res.render('index');
});
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`);
});