const axios = require("axios");
const { paginate } = require("../utility/paginate");

const getEntries = async (options) => {
  const response = await axios.get("https://api.publicapis.org/entries");
  let entries = response.data.entries;

  const filteredEntries = entries.filter((entry) => {
    if (options.category === "all") return true;
    return entry.Category === options.category;
  });

  entries = paginate(filteredEntries, options.page, options.limit);

  return entries;
};

module.exports = {
  getEntries,
};
