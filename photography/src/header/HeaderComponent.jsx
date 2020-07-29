import React,{Component} from 'react';
import NavBarComponent from "../navBar/NavBarComponent";

class HeaderComponent extends Component{

    render(){
        const linkNames=this.props;
        return(
            <div>
                <div className="header-main">
                    <div className="header-center">
                        Shishir Shetty
                        <div className="header-subtitle">
                            Photography
                        </div>
                    </div>

                    <NavBarComponent showlinks={linkNames} />
                </div>
            </div>
        )
    }
}
export default HeaderComponent;