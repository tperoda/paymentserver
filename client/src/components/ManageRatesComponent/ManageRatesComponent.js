import React, { useEffect } from "react";
import { Table, Label, Button, Input } from "semantic-ui-react";

const ManageRatesComponent = ({ marginArray }) => {

  const removeItem = (val) => {
    marginArray.forEach(item => {
      if (item.key === val) {
        const index = marginArray.indexOf(item);
        marginArray.splice(index, 1);
      }
    });
  };

  const renderArray = () => {
    if (marginArray !== undefined) {
      return marginArray.map(val => (
        <Table.Row>
          <Table.Cell>
            {val.text}
            <Button onClick={() => removeItem(val.key)}>Remove</Button>
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
            <Input />
            <Button name="add" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ManageRatesComponent;