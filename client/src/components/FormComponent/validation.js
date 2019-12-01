const yup = require("yup");

// TODO: Add logic to allow empty strings in validation for margin and markup
const min = 0;
const validationSchema = yup.object({
  rate: yup.string()
  .matches(/^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9][0-9]+)?)$/, {
    message: 'Incorrect amount format',
    excludeEmptyString: true
  })
  .test({
    name: '$0 Minimum',
    exclusive: true,
    params: { min },
    message: `Amount must be more than ${min} dollars`,
    test: value => {
      const amountNumber = parseFloat(value).toFixed(2);
  
      return amountNumber.length >= min;
    }
  }).required("Rate is a required field"),
  margin: yup.string().required("Percentage is a required field"),
  markup: yup.string().required("Percentage is a required field")
});

module.exports = { validationSchema };