var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('/home/hosting_users/getwis88/apps/ggungd/public/js/example.json', (err, data) => {
    if(err) throw err;
    const results = JSON.parse(data.toString('utf8'));
    res.render('index', { title:"WEB Designer", results });
  });
});

module.exports = router;
