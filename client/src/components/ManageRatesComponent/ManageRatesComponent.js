import React, { useState } from "react";
import { Table, Label, Button, Input } from "semantic-ui-react";

const ManageRatesComponent = ({ marginArray, deleteRate, postRate }) => {
  const [ inputVal, setInputVal ] = useState();

  const renderArray = () => {
    if (marginArray !== undefined) {
      return marginArray.map(val => (
        <Table.Row>
          <Table.Cell>
            {val.text}
            <Button onClick={() => deleteRate(val.key, "margin")}>Remove</Button>
          </Table.Cell>
        </Table.Row>
      ));
    }
    return "";
  }
  return (
    <Table celled>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Rates</Label>
          </Table.Cell>
          </Table.Row>
        {renderArray()}
        <Table.Row>
          <Table.Cell>
            <Input onChange={e => setInputVal(e.target.value)} />
            <Button name="add" onClick={() => postRate(inputVal, "margin")} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ManageRatesComponent;