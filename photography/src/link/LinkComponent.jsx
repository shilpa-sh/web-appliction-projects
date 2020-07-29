import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PortfolioComponent from "../portfolio/PortfolioComponent";
import AboutComponent from "../about-contact/AboutComponent";
import ContactComponent from "../about-contact/ContactComponent";
import NavBarComponent from "../navBar/NavBarComponent";
import HeaderComponent from "../header/HeaderComponent";
import PortfolioContainer from "../portfolio/PortfolioContainer";

class LinkComponent extends Component{
    constructor() {
        super();
        this.state ={
            clicked:false
        }
    }
    showlinks = data => data.map(item =>
        // <Nav horizontal>  {'/Home?id=' + o.id}
        <Nav>
            <NavItem>
                {/*<NavLink to={"/portfolio"} key={item.id} onClick={(event) => this.showPage(item.val)}>{item.val}</NavLink>*/}
                {/*<NavLink to={'/?id='+item.val} key={item.id} onClick={(event) => this.showPage(item.val)}>{item.val}</NavLink>*/}
                <NavLink key={item.id} onClick={(event) => this.showPage(item.val)}>{item.val}</NavLink>
            </NavItem>
        </Nav>
        );

    showPage = data => {
        alert(data);
        //header
        this.setState({clicked: true});
        //footer

    }
    render(){
        const linkNames = this.props;
        const data = linkNames.linkNames.linkNames;
        const {clicked} = this.state;
        return(
            <div>
            <div className="center-left">
                {linkNames && linkNames.linkNames && this.showlinks(data)}
            </div>
                {clicked && <PortfolioComponent linkNames={linkNames}/>}
                {clicked && <AboutComponent linkNames={linkNames}/>}
                {clicked && <ContactComponent linkNames={linkNames}/>}

                {/*<NavBarComponent showlinks={linkNames}/>*/}
                {/*<HeaderComponent linkNames={linkNames}/>*/}
                {/*   {clicked && <PortfolioContainer/>}*/}

            </div>
        )
    }

}
export default LinkComponent;