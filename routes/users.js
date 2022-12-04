var express = require('express');
var router = express.Router();
router.use(logger)

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.body)
    console.log(req.query)
    console.log(req.query.names)
    res.send('This is users page.');
});

router.get('/usersList', function(req, res, next) {
    res.send('This is usersList page.');
});

router.get('/:id', (req, res) => {
    console.log('users:', req.users)
    console.log('params:', req.params)
    res.send(`Get Users with ID ${req.params.id}`)
})

const user = [{ name: "Kobe" }, { name: "Jordan" }]
router.param('id', (req, res, next, id) => {
    req.users = user[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router;