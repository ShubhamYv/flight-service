const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
  const modelNumber = req.body.modelNumber?.trim();

  if (!modelNumber) {
    ErrorResponse.message = 'Validation Error: Missing required fields';
    ErrorResponse.error = new AppError(['Model Number is required and cannot be empty'], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  if (modelNumber.length < 3) {
    ErrorResponse.message = 'Validation Error: Invalid Model Number';
    ErrorResponse.error = new AppError(['Model Number must be at least 3 characters long'], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateRequest
};
