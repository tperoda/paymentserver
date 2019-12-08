const defaultMargin = [
  {
    key: "18",
    text: "18%",
    value: "18"
  },
  {
  key: "20",
  text: "20%",
  value: "20"
  },
  {
  key: "22",
  text: "22%",
  value: "22"
  },
  {
  key: "25",
  text: "25",
  value: "25"
  },
];

const defaultMarkup = [
  {
    key: "21.96",
    text: "21.96% - (18% Margin)",
    value: "21.96",
    markup: 1.22,
    marginPercent: "18"
  },
  {
    key: "25",
    text: "25% - (20% Margin)",
    value: "25",
    markup: 1.25,
    marginPercent: "20"
  },
  {
    key: "28.2",
    text: "28.2% - (22% Margin)",
    value: "28.2",
    markup: 1.282,
    marginPercent: "22"
  },
  {
    key: "33.33",
    text: "33.33% - (25% Margin)",
    value: "33.33",
    markup: 1.333,
    marginPercent: "25"
  },
];

module.exports = { defaultMargin, defaultMarkup };
