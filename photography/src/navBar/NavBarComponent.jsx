import React,{Component} from 'react';
import {Nav, NavItem, NavLink, Button} from "reactstrap";

class NavBarComponent extends Component{

    displaylinks = data => data.map(item =>
            <Button key={item.id}>{item.val}</Button>
    );

    render(){
        const showlinks = this.props;
        console.log(" **** ");
        console.log(showlinks);

        const data = showlinks && showlinks.showlinks.linkNames && showlinks.showlinks.linkNames.linkNames.linkNames.linkNames || '';
        return(
            <div className="container">
                <div>
                {showlinks && showlinks.showlinks.linkNames && showlinks.showlinks.linkNames.linkNames && this.displaylinks(data)}
                </div>
            </div>

        )
    }
}
export default NavBarComponent;