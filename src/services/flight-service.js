const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getFlight(id) {
  try {
    const flight = await flightRepository.get(id);
    return flight;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(`The flight you requested is not present`, error.statusCode);
    }
    throw new AppError(`Cannot find Flight with the id: ${id}`, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getFlights() {
  try {
    return await flightRepository.getAll();
  } catch (error) {
    throw new AppError('Cannot fetch data of all the Flight', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createFlight,
  getFlight,
  getFlights,
}