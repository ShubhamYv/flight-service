const express = require('express');
const { AirportController } = require('../../controllers/index');
const { AirportMiddlewares } = require('../../middlewares/index')
const router = express.Router();

router
  .post("/",
    AirportMiddlewares.validateCreateAirportRequest,
    AirportController.createAirport);

router.get("/", AirportController.getAirports);
router.get("/:id", AirportController.getAirport);
router.delete("/:id", AirportController.destroyAirport);
router.put("/:id", AirportController.updateAirport);

module.exports = router;
