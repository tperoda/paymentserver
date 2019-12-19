import React from "react";
import PropTypes from 'prop-types'
import { Grid } from "semantic-ui-react";
import { salaryCalculation } from "utils";
import "./styles.scss";

const MobileSalaryComponent = ({ payRate, termRate }) => {
  return (
    <Grid mobile={16} className="mobile-salary">
      <Grid.Row columns={1} className="mobile-salary-header">
        <Grid.Column>Annual Salary</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column className="mobile-salary-label">Inc Salary</Grid.Column>
        <Grid.Column className="mobile-salary-value">{salaryCalculation(payRate, "inc")}</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column className="mobile-salary-label">Term Salary</Grid.Column>
  <Grid.Column className="mobile-salary-value">{salaryCalculation(termRate, "term")}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

MobileSalaryComponent.propTypes = {
  payRate: PropTypes.string.isRequired,
  termRate: PropTypes.string.isRequired
};

export default MobileSalaryComponent;

