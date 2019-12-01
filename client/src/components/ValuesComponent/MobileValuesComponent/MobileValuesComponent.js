import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import "./styles.scss";

const MobileValuesComponent = ({
  billRate,
  percentage,
  termRate,
  payRate,
  type
}) => {
  return (
    <Grid mobile={16} className="mobile-values">
      <Grid.Row columns={1} className="mobile-values-header">
        <Grid.Column>Calculated Values</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column className="mobile-values-label">Bill</Grid.Column>
        <Grid.Column className="mobile-values-value">{billRate}</Grid.Column>
        <Grid.Column className="mobile-values-label">Pay</Grid.Column>
        <Grid.Column className="mobile-values-value">{payRate}</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column className="mobile-values-label">Term</Grid.Column>
        <Grid.Column className="mobile-values-value">{termRate}</Grid.Column>
        <Grid.Column className="mobile-values-label">{type}</Grid.Column>
        <Grid.Column className="mobile-values-value">{percentage}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

MobileValuesComponent.propTypes = {
  billRate: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  termRate: PropTypes.string.isRequired,
  payRate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default MobileValuesComponent;