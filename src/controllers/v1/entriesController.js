const { asyncMiddleware } = require("../../utility/error-handler");
const { entriesService } = require('../../services')

const getEntries = asyncMiddleware(async (req, res, next) => {
    let options = req.query;
    options.page = options.page ?? 1
    options.limit = options.limit ?? 10
    options.category = options.category ?? "all"

    const entries = await entriesService.getEntries(options);

    return res.status(200).json(entries);
});

module.exports = {
    getEntries,

};
