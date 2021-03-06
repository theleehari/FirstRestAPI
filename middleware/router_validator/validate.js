const { validationResult } = require("express-validator");
const { HTTP_STATUS_CODE } = require("../../constant/index");

exports.getValidationResult = () => {
  return (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res
      .status(HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY)
      .json(errors.array());
  };
};
