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

const getMarginPercent = (markup) => {
  const total = 100 * markup;
  const diff = total - 100;
  const marginNumber = ((diff / total) * 100).toFixed(1);
  return marginNumber.toString();
};

const getMarkup = (val) => parseFloat((val / 100) + 1).toFixed(3);

module.exports = { compare, getMarginPercent, getMarkup };