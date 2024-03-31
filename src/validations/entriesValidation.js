const { body, param, query } = require("express-validator");

const getEntries = [
  query("limit").optional().notEmpty().bail().withMessage(),
  query("page").optional().notEmpty().bail().withMessage(),
  query("category").optional().notEmpty().bail().withMessage(),
];

module.exports = {
  getEntries,
};
