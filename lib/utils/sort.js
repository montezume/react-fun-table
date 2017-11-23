const sortString = (a, b, desc) => {
  const reverse = desc ? -1 : 1;

  if (a < b) {
    return -1 * reverse;
  }
  if (a > b) {
    return 1 * reverse;
  }

  return 0;
};

const convertToStringAndLowerCase = value => {
  let returnValue;
  if (typeof value !== 'string') {
    returnValue = value.toString();
  } else {
    returnValue = value;
  }

  return returnValue.toLowerCase();
};

export const sort = (data, attribute, sortDescending) => {
  return data.sort((a, b) => {
    const aString = convertToStringAndLowerCase(a[attribute]);
    const bString = convertToStringAndLowerCase(b[attribute]);
    return sortString(aString, bString, sortDescending);
  });
};
