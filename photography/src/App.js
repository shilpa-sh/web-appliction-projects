import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Router, browserHistory} from 'react-router';
import HomeContainer from "./home/HomeContainer";
import PortfolioComponent from "./portfolio/PortfolioComponent";
import NavBarComponent from "./navBar/NavBarComponent";
import RouteConfig from "./RouteConfig";
import './App.css';
import './home/home.css';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <Switch>
              {/*<Router history={browserHistory}>*/}
                  <Route exact path={"/"} component={HomeContainer}/>
                  {/*<Route path={"/portfolio"} component={PortfolioComponent}/>*/}

              {/*</Router>*/}
              </Switch>
          </BrowserRouter>

      // <div className="App">
      //     <HomeContainer/>
      //     <RouteConfig/>
      //    <NavBarComponent/>
      // </div>
    );
  }
}

export default App;
