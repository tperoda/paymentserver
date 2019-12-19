import React from "react";
import PropTypes from "prop-types";
import { useWindowDimensions } from "utils";
import { Formik, Form, Field } from "formik";
import { Input, Dropdown, Button } from "semantic-ui-react";
import { validationSchema } from "./validation";
import "./styles.scss";

// TODO: Fix error validation/initial values
const FormComponent = ({
  rateType, percentType, setData, percentageRates, loginValues
}) => {
  FormComponent.propTypes = {
    rateType: PropTypes.string.isRequired,
    percentType: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    percentageRates: PropTypes.array.isRequired,
    loginValues: PropTypes.shape({}).isRequired
  };

  const renderMobileButtons = () => {
    return (
      <div className="mobile-buttons">
        <Button className="form-button" ><a href={loginValues.url}>{loginValues.text}</a></Button>
        <Button className="form-button" ><a href="/manage_rates">Manage Rates</a></Button>
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
        percent: ""
      }
    }
      validationSchema={validationSchema}
      onSubmit={(data) => {
        setData(data);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="rate-input-form">
          <div className="form-rate-field">
            <Field 
              placeholder={rateType} 
              as={Input} 
              name="rate" 
              className={errors.rate && touched.rate ? "error-border" : ""} 
            />
            <p className="error-message">
              {errors.rate && touched.rate ? errors.rate : null}
            </p>
          </div>
          <div>
            <Dropdown
              className={errors.percent && touched.percent ? "error-border" : ""}
              selection
              placeholder={percentType}
              name="percent"
              options={percentageRates}
              value={percentageRates ? percentageRates.value : ""}
              onChange={(e, { name, value }) => setFieldValue(name, value)}
            />
            <p className="error-message">
              {errors.percent && touched.percent ? errors.percent : null}
            </p>
          </div>
          {width < 768 && renderMobileButtons()}
          {width >= 768 && renderButton()}
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
