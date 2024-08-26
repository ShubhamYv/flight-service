const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { DateTimeHelper } = require('../utils/helpers');

function validateCreateFlightRequest(req, res, next) {
  const missingFields = [];

  if (!req.body.flightNumber) {
    missingFields.push('Flight number');
  }

  if (!req.body.airplaneId) {
    missingFields.push('Airplane ID');
  }

  if (!req.body.departureAirportId) {
    missingFields.push('Departure Airport ID');
  }

  if (!req.body.arrivalAirportId) {
    missingFields.push('Arrival Airport ID');
  }

  if (!req.body.arrivalTime) {
    missingFields.push('Arrival time');
  }

  if (!req.body.departureTime) {
    missingFields.push('Departure time');
  }

  if (!req.body.price) {
    missingFields.push('Price');
  }

  if (!req.body.totalSeats) {
    missingFields.push('Total seats');
  }

  if (missingFields.length > 0) {
    const errorMessage = `${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} missing in the request.`;
    ErrorResponse.message = 'Validation Error: Missing required fields while creating flights';
    ErrorResponse.error = new AppError([errorMessage], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  next();
}

function validateFlightTimes(req, res, next) {
  const { departureTime, arrivalTime } = req.body;
  const isValid = DateTimeHelper.compareTime(departureTime, arrivalTime);

  if (!isValid) {
    ErrorResponse.message = 'Validation Error: Time logic is incorrect while creating flight.';
    ErrorResponse.error = new AppError(
      ['Departure time must be before arrival time.'],
      StatusCodes.BAD_REQUEST
    );
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateFlightRequest,
  validateFlightTimes,
};
