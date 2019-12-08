const compare = (a, b) => {
  const keyA = a.key;
  const keyB = b.key;

  let comparison = 0;

  if (keyA > keyB) {
    comparison = 1;
  } else if (keyA < keyB) {
    comparison = -1;
  }

  return comparison;
};

module.exports = compare;