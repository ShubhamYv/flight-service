const express = require('express')
const { FlightController } = require('../../controllers')
const { FlightMiddlewares } = require('../../middlewares')
const router = express.Router();

router
  .post("/",
    FlightMiddlewares.validateCreateFlightRequest,
    FlightMiddlewares.validateFlightTimes,
    FlightController.createFlight);

router.get("/:id", FlightController.getFlight);
router.get("/", FlightController.getAllFlights);

module.exports = router;