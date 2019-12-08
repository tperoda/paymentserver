import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ManageRates from "containers/ManageRates";
import Header from "./containers/Header";
import LandingComponent from "./containers/LandingPage/LandingPage";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Store from "./store";
import "./styles/global.scss";
import "./styles/responsive.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Store>
          <header>
            <Header />
          </header>
          <Container>
            <main>
                <Switch>
                  <Route exact path="/" component={LandingComponent} />
                  <Route exact path="/manage_rates" component={ManageRates} />
                </Switch>
            </main>
          </Container>
          <footer>
            <FooterComponent />
          </footer>
        </Store>
      </div>
    </BrowserRouter>
  );
};

export default App;
