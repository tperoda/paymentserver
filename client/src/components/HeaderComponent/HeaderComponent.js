import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HeaderComponent = ({ loginValues }) => {
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
            <Link to="/manage_rates">Manage Rates</Link>
          </h4>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

HeaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

HeaderComponent.defaultProps = {
  text: "",
  url: ""
};

export default HeaderComponent;
