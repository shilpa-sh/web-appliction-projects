import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PortfolioComponent from "./portfolio/PortfolioComponent";

const RouteConfig = (props) =>{
    <BrowserRouter>
        <Switch>
            <Route path="/portfolio" component={PortfolioComponent}/>
        </Switch>
    </BrowserRouter>

}
export default RouteConfig;