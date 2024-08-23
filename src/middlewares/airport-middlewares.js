const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateAirportRequest(req, res, next) {
  const missingFields = [];

  if (!req.body.name) {
    missingFields.push('Airport name');
  }

  if (!req.body.code) {
    missingFields.push('Airport code');
  }

  if (!req.body.cityId) {
    missingFields.push('Airport cityId');
  }

  if (!req.body.address) {
    missingFields.push('Airport address');
  }

  if (missingFields.length > 0) {
    const errorMessage = `${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} missing in the request.`;
    ErrorResponse.message = 'Validation Error: Missing required fields';
    ErrorResponse.error = new AppError([errorMessage], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateAirportRequest
};
