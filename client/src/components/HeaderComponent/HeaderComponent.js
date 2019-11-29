import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HeaderComponent = ({ loginValues }) => {

  console.log("Login Values", loginValues);
  return (
    <Menu pointing className="payment-header">
      <Menu.Item>
        <h4>
          <Link to="/">Payment Calculator</Link>
        </h4>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="login-link">
          <h4>
            <a href={loginValues.url}>{loginValues.text}</a>
          </h4>
        </Menu.Item>
        <Menu.Item className="update-link">
          <h4>
            <Link to="/update">Update Rates</Link>
          </h4>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default HeaderComponent;
