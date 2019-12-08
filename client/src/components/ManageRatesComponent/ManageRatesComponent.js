import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table, Label, Button, Input } from "semantic-ui-react";
import "./styles.scss";

const ManageRatesComponent = ({ ratesArray, deleteRate, postRate, type }) => {
  ManageRatesComponent.propTypes = {
    ratesArray: PropTypes.shape({}).isRequired,
    deleteRate: PropTypes.func.isRequired,
    postRate: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  };

  const [ inputVal, setInputVal ] = useState();
  
  const renderArray = () => {
    if (ratesArray !== undefined) {
      return ratesArray.map(val => (
        <Table.Row key={val._id.toString()}>
          <Table.Cell className="rate-row">
            <span className="rate-value">{val.text}</span>
            <Button className="rate-button" onClick={() => deleteRate(val.key, type)}>Remove</Button>
          </Table.Cell>
        </Table.Row>
      ));
    }
    
  }
  return (
    <Table celled>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Your {type} rates</Label>
          </Table.Cell>
        </Table.Row>
        {renderArray()}
        <Table.Row>
          <Table.Cell>
            <Input className="rate-input" onChange={e => setInputVal(e.target.value)} /> 
            <Button className="add-button" name="add" onClick={() => postRate(inputVal, type)}>Add</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ManageRatesComponent;