const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCityName(req, res, next) {
  const cityName = req.body.name?.trim();

  if (!cityName) {
    ErrorResponse.message = 'Validation Error: Missing required fields';
    ErrorResponse.error = new AppError(['City name is required and cannot be empty'], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  if (cityName.length < 3) {
    ErrorResponse.message = 'Validation Error: Invalid City Name';
    ErrorResponse.error = new AppError(['City name must be at least 3 characters long'], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCityName
};
