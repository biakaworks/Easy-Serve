const router = require('express').Router();
const hotdogJS = require('../../models/hotdogs.js');
const table = require('../../models/table.js');

// Add sequelize code to get all food and return them as JSON
router.get('/api/tables', async (req, res) => {
  const hotdog = await hotdogJS.findAll({});
  res.json(hotdog);
});
router.post('/api/tables', async function (req, res) {
  const newTable = await table.create(req.body);
  res.json(newTable);
});

router.delete('/api/hotDogs/:id', async (req, res) => {
  const option = {
    where: {
      id: req.params.id
    }
  };
  const result = await hotdogJS.destroy(req.body);
  res.json();
});

// Add sequelize code to get a specific food and return it as JSON
router.get('/api/:food', async (req, res) => {
  const selectItem = await table.findOne({
    where: {
      id: req.params.food
    }
  });
  res.json(selectItem);
});

// POST route for saving a food. We can create food with the data in req.body
router.post('/api/hotDogs', async function (req, res) {
  const newHotDog = await Hotdogs.create(req.body);
  res.json(newHotDog);
});

router.delete('/api/food/:id', async (req, res) => {
  const option = {
    where: {
      id: req.params.id
    }
  };
  const result = await Hotdogs.destroy(req.body);
  res.json();
});

// Add sequelize code to create a order
router.post('/api/newOrder', async (req, res) => {
  const createOrder = await Food.create(req.body);
  res.json(createOrder);
});
module.exports = router;
