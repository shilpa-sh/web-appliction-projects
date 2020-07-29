import React,{Component} from 'react';
import HomeComponent from "./HomeComponent";

class HomeContainer extends Component{
    render() {
        const linkData= [
            {id:1,
                val:"Portfolio"},
            { id:2,
                val:"About"},
            { id:3,
                val:"Contact"},
        ];
        return(
            <div>
                <HomeComponent
                    linkNames={linkData}
                />
            </div>
        )
    }

}
export default HomeContainer;