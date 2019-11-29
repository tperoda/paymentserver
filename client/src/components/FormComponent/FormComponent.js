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
    percentageRates: PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      markup: PropTypes.string
    }).isRequired
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
      {({ errors, setFieldValue, handleReset }) => (
        <Form className="rate-input-form">
          <div className="form-rate-field">
            <Field placeholder={rateType} as={Input} name="rate" className={errors.rate ? "error-border" : ""} />
            <p className="error-message">{errors.rate}</p>
          </div>
          <div>
            <Dropdown
              placeholder={percentType}
              name={percentType.toLowerCase()}
              options={percentageRates}
              selection
              value={percentageRates.value}
              onChange={(e, { name, value }) => setFieldValue(name, value)}
            />
            {/* <p className="error-message">{errors.margin ? errors.margin : errors.markup}</p> */}
          </div>
          <Button className="form-button" type="submit">Submit</Button>
          <Button className="form-reset" onClick={handleReset}>Clear</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
