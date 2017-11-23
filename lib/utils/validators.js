export const validateColumns = (columns, accessor) => {
  for (let i = 0; i < columns.length; i ++) {
    if (!columns[i].hasOwnProperty(accessor)) {
      throw new Error(`Column missing accessor ${accessor} property`);
    }
  }
};

export const getSortBy = (sortBy, columns, accessor) => {
  if (!sortBy || typeof sortBy === 'undefined') {
    sortBy = columns && columns[0] && columns[0][accessor];

    if (!sortBy) {
      throw new Error('Nothing to sort by!, please check that your accessor exists in your columns');
    }
    return sortBy;
  } else {
    return sortBy;
  }
};
