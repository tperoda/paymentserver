import React, { useContext } from "react";
import ManageRatesComponent from "components/ManageRatesComponent";
import { Tab } from "semantic-ui-react";
import { UserContext } from "store/Store";

const ManageRates = () => {
  const user = useContext(UserContext);

  const marginDefaultRates = [
    {
      key: "18",
      text: "18%",
      value: "18"
    },
    {
      key: "20",
      text: "20%",
      value: "20"
    },
    {
      key: "22",
      text: "22%",
      value: "22"
    },
    {
      key: "25",
      text: "25%",
      value: "25"
    }
  ];

  const { margin, markup } = user;
  const panes = [
    { menuItem: "Margin", render: () => <Tab.Pane><ManageRatesComponent marginArray={marginDefaultRates} /></Tab.Pane> },
    { menuItem: "Markup", render: () => <Tab.Pane><ManageRatesComponent markupArray={markup} /></Tab.Pane> }
  ]
  return <Tab panes={panes} />;
};

export default ManageRates;
