import React from "react";
import { Grid } from "semantic-ui-react";
import "./styles.scss";

const MobileValuesComponent = () => {
  return (
    <Grid mobile={16} className="mobile-values">
      <Grid.Row columns={1}>
        <Grid.Column className="mobile-values-header">Calculated Values</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column className="mobile-values-label">Bill Rate</Grid.Column>
        <Grid.Column className="mobile-values-value">$123.45</Grid.Column>
        <Grid.Column className="mobile-values-label">Pay Rate</Grid.Column>
        <Grid.Column className="mobile-values-value">$123.45</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column className="mobile-values-label">Term Rate</Grid.Column>
        <Grid.Column className="mobile-values-value">$123.45</Grid.Column>
        <Grid.Column className="mobile-values-label">Margin</Grid.Column>
        <Grid.Column className="mobile-values-value">$123.45</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MobileValuesComponent;