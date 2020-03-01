const router = require('express').Router();
const burger = require('../controllers/burgers_controller.js');

//GET all burgers
router.get('/burgers', (req, res) => {
  burger.selectAll( (burgers) => {
    res.json(burgers);
});
});

//POST a new burger
router.post('/burgers', (req, res) => {
  console.log(req.body);
  burger.insertOne(req.body, () => {
    res.sendStatus(200);
    console.log('added burger');
  });
});

//PUT(update) a burger
router.put('/burgers/:id', (req, res) => {
  burger.updateOne( {devoured: true}, req.params.id, () => {
    res.sendStatus(200);
    console.log('updated burger!');
  })
});



module.exports = router;
