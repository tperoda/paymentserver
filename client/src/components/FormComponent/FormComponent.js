import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Input, Dropdown, Button } from "semantic-ui-react";
import { validationSchema } from "./validation";
import "./styles.scss";

// TODO: Breakout components to setup error handling on validation
const FormComponent = ({
  rateType, percentType, setData, percentageRates
}) => {
  FormComponent.propTypes = {
    rateType: PropTypes.string.isRequired,
    percentType: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    percentageRates: PropTypes.array.isRequired
  };

  FormComponent.defaultProps = {
    percentageRates: [{
      key: "Default Message",
      text: "No Rates Found",
      value: "No Rates Found"
    }]
  };

  return (
    <Formik
      initialValues={
      {
        rate: "",
        margin: "",
        markup: ""
      }
    }
      validationSchema={validationSchema}
      onSubmit={(data) => {
        setData(data);
      }}
    >
      {({ errors, setFieldValue }) => (
        <Form className="rate-input-form">
          <div className="form-rate-field">
            <Field placeholder={rateType} as={Input} name="rate" className={errors.rate ? "error-border" : ""} />
            <p className="error-message">{errors.rate}</p>
          </div>
          <div>
            <Dropdown
              selection
              placeholder={percentType}
              name={percentType.toLowerCase()}
              options={percentageRates}
              value={percentageRates ? percentageRates.value : ""}
              onChange={(e, { name, value }) => setFieldValue(name, value)}
            />
            {/* <p className="error-message">{errors.margin ? errors.margin : errors.markup}</p> */}
          </div>
          <Button className="form-button" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
