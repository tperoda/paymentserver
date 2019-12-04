import React from "react";
import { Table, Label, Button, Input } from "semantic-ui-react";

const ManageRatesComponent = ({ marginArray, setData }) => {

  const removeItem = (val) => {
    const newArray = marginArray.filter(item => item.key !== val);
    setData(newArray);
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