import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import { formatCurrency } from "utils";
import "./styles.scss";

// TODO: Style component, possibly add modal or display for term rate calc
const ValuesComponent = ({
  billRate, 
  payRate, 
  termRate, 
  percentage, 
  type
}) => {
  return (
    <Table className="values-container" celled striped textAlign="center">
      <Table.Header>
        <Table.Row className="mobile-header">
          <Table.HeaderCell className="values-header" colSpan={8}>Calculated Values</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className="values-body">
        <Table.Row>
          <Table.Cell textAlign="center">
            Bill Rate
          </Table.Cell>
          <Table.Cell textAlign="center">
            {formatCurrency(billRate)}
          </Table.Cell>
          <Table.Cell textAlign="center">
            Pay Rate
          </Table.Cell>
          <Table.Cell textAlign="center">
            {formatCurrency(payRate)}
          </Table.Cell>
          <Table.Cell textAlign="center">
            Term Rate
          </Table.Cell>
          <Table.Cell textAlign="center">
            {formatCurrency(termRate)}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {type}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {`${percentage}%` || "0%"}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

ValuesComponent.propTypes = {
  billRate: PropTypes.string.isRequired,
  payRate: PropTypes.string.isRequired,
  termRate: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ValuesComponent;
