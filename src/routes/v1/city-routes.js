const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

router
  .post("/",
    CityMiddlewares.validateCityName,
    CityController.createCity);

router.put("/:id", CityController.updateCity);
router.delete("/:id", CityController.destroyCity)

module.exports = router;