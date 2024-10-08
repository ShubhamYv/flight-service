const express = require('express');
const { AirplaneController } = require('../../controllers/index');
const { AirplaneMiddlewares } = require('../../middlewares/index')
const router = express.Router();

router
  .post("/",
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

router.get("/", AirplaneController.getAirplanes)
router.get("/:id", AirplaneController.getAirplane);
router.delete("/:id", AirplaneController.destroyAirplane)
router.put("/:id", AirplaneController.updateAirplane)

module.exports = router;
