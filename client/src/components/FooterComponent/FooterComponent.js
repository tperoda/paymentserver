import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./styles.scss";


const FooterComponent = () => (
  <Menu pointing className="payment-footer">
    <Icon name="copyright outline" />
    <h4>Copyright 2019</h4>
  </Menu>
);

export default FooterComponent;
