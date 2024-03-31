const express = require("express");
const { auth } = require('../../middlewares/auth.js')
const { entriesValidation } = require('../../validations')
const { expressValidate } = require("../../middlewares/validate.js");
const {entriesController} = require('../../controllers/v1')


const router = express.Router();

/**
 * @swagger
 * /v1/entries/get-entries:
 *   get:
 *     tags:
 *       - Entries
 *     summary: Get entries
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of entries to return per page.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number to return.
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: The category of entries to return.
 *     responses:
 *       200:
 *         description: A list of entries.
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Failed to get entries
 */
router
  .route("/get-entries")
  .get(auth, expressValidate(entriesValidation.getEntries), entriesController.getEntries);

module.exports = router;