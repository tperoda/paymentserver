export const filterRates = (markupKey, markupArr) => {
  if (markupKey !== "0") {
    const filteredMarkup = markupArr.filter((item) => item.key === markupKey);
    const markupVal = filteredMarkup[0].markup;

    return markupVal;
  };
};
