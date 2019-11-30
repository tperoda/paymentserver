import React from "react";
import PropTypes from "prop-types";
import { Table, Popup, Icon } from "semantic-ui-react";
import { salaryCalculation } from "utils";
import "./styles.scss";

const SalaryComponent = ({ payRate, termRate }) => {
  SalaryComponent.propTypes = {
    payRate: PropTypes.string.isRequired,
    termRate: PropTypes.string.isRequired
  };

  return (
    <Table className="salary-container" celled striped textAlign="center">
      <Table.Header>
        <Table.Row className="mobile-header">
          <Table.HeaderCell className="salary-header" colSpan={8}>Annual Salaries</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className="salary-body">
        <Table.Row>
          <Table.Cell className="salary-label">
            Annual Incorporated Salary
            <Popup
              content="Based on 2080 hours"
              trigger={<Icon name="question circle outline" />}
            />
          </Table.Cell>
          <Table.Cell className="salary-value">{salaryCalculation(payRate, "inc")}</Table.Cell>
          <Table.Cell className="salary-label">
            Annual Term Salary
            <Popup
              content="Based on 1900 hours"
              trigger={<Icon name="question circle outline" />}
            />
          </Table.Cell>
          <Table.Cell className="salary-value">{salaryCalculation(termRate, "term")}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default SalaryComponent;
