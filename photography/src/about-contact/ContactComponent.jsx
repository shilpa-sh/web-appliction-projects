import React,{Component} from 'react';
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";

class ContactComponent extends Component{
    render() {
        const linkNames = this.props;
        return(
            <div style={{border:"4px solid pink"}}>
                <HeaderComponent linkNames={linkNames}/>
                Contact
                <FooterComponent/>
            </div>
        )
    }

}

export default ContactComponent;
