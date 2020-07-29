import React,{Component} from 'react';
import LinkComponent from "../link/LinkComponent";
import welcome from '../image/home.JPG';

class HomeComponent extends Component{

    render() {
    const linkNames = this.props;
        return(
            <div className="container-fluid" style={{border:"4px solid blue"}}>
                <img className="welcome-pic" src={welcome}></img>
                    <div className="top-right">
                       shishirshetty_photo.com
                        <div className="top-right-subname">
                            <p>Shishir Shetty Photography</p>
                        </div>
                    </div>

                    {/*<div className="center-left">*/}
                        <LinkComponent
                            linkNames={linkNames}
                        />
                    {/*</div>*/}
            </div>
        )
    }

}
export default HomeComponent;