const deepCopyObject = (objToCopy) => {
  if (objToCopy instanceof Array) {
    return objToCopy.map((item) => deepCopyObject(item));
  }
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }
  const objToReturn = {};
  // eslint-disable-next-line array-callback-return
  Object.keys(objToCopy).map((key) => {
    objToReturn[key] = deepCopyObject(objToCopy[key]);
  });
  return objToReturn;
};

export { deepCopyObject };
