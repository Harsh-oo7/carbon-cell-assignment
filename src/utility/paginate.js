function paginate(array, page = 1, pageSize = 10) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedArray = array.slice(startIndex, endIndex);

  return {
    currentPage: page,
    pageSize: pageSize,
    totalPages: Math.ceil(array.length / pageSize),
    totalItems: array.length,
    data: paginatedArray,
  };
}

module.exports = {
  paginate,
};
