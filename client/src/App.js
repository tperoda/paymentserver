import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "containers/Login";
import UpdateRates from "containers/UpdateRates";
import Header from "./containers/Header";
import LandingComponent from "./containers/LandingPage/LandingPage";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Store from "./store";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Store>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={LandingComponent} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/update" component={UpdateRates} />
            </Switch>
          </main>
          <footer>
            <FooterComponent />
          </footer>
        </Store>
      </div>
    </BrowserRouter>
  );
};

export default App;
