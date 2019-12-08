import React, { useContext } from "react";
import ManageRatesComponent from "components/ManageRatesComponent";
import ModalComponent from "components/ModalComponent";
import { Tab } from "semantic-ui-react";
import { UserContext } from "store/Store";
import "./styles.scss";

const ManageRates = () => {
  const value = useContext(UserContext);
  const { user, deleteRate, postRate } = value;

  const renderManageRates = () => {
    if (!user) {
      return <ModalComponent />;
    } else {
      return <Tab className="manage-rates-container" panes={panes} />;
    }
  };

  const panes = [
    { menuItem: "Margin", render: () => {
      return (
        <Tab.Pane>
          <ManageRatesComponent 
            type="margin" 
            ratesArray={user.margin} 
            deleteRate={deleteRate} 
            postRate={postRate}
          />
        </Tab.Pane> 
      ); 
    } },
    { menuItem: "Markup", render: () => {
      return (
        <Tab.Pane>
          <ManageRatesComponent 
            type="markup" 
            ratesArray={user.markup} 
            deleteRate={deleteRate} 
            postRate={postRate} 
          />
        </Tab.Pane>
      ); 
    }  }
  ]
  return renderManageRates();
};

export default ManageRates;
