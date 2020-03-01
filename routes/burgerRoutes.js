const router = require('express').Router();
const burger = require('../controllers/burgers_controller.js');

//GET all burgers
router.get('/burgers', (req, res) => {
  burger.selectAll((err, burgers) => {
    if (err) throw err;
    res.json(burgers);
  });
});

//POST a new burger
router.post('/burgers', (req, res) => {
  burger.insertOne(req.body, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

//PUT(update) a burger
router.put('/burgers/:id', (req, res) => {
  burger.updateOne( {devoured: true}, req.params.id, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  })
});



module.exports = router;
