import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useWindowDimensions } from "utils";
import { Formik, Form, Field } from "formik";
import { Input, Dropdown, Button } from "semantic-ui-react";
import { validationSchema } from "./validation";
import "./styles.scss";

// TODO: Breakout components to setup error handling on validation
const FormComponent = ({
  rateType, percentType, setData, percentageRates
}) => {

  const renderMobileButtons = () => {
    return (
      <div className="mobile-buttons">
        <Button className="form-button" ><a href="/auth/google">Login</a></Button>
        <Button className="form-button" ><a href="/update">Update Rates</a></Button>
        <Button className="form-button" type="submit">Submit</Button>
      </div>
    )
  }

  const renderButton = () => {
    return <Button className="form-button" type="submit">Submit</Button>;
  }

  const { width } = useWindowDimensions();
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
          {width < 768 && renderMobileButtons()}
          {width > 768 && renderButton()}
        </Form>
      )}
    </Formik>
  );
};

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

export default FormComponent;
