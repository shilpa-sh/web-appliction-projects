import React,{Component} from 'react';
import {Jumbotron, Button, Input, Col, FormGroup} from 'reactstrap';

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <Jumbotron className="jumbotron-alignment">
                    <p className="stay-text">Stay in the Loop</p>
                    <hr className="my-2" />
                    <p>Subscribe to my newsletter to learn about studio specials, gallery showings, charity events, photography tips, and more!</p>
                    <FormGroup row>
                        <Col md={3}>
                            <Input type="firstname" name="firstname" placeholder="First Name"/>
                        </Col>
                        <Col md={3}>
                            <Input type="lastname" name="lastname" placeholder="Last Name"/>
                        </Col>
                        <Col md={3}>
                            <Input type="email" name="email" placeholder="Email Address"/>
                        </Col>
                        <Col md={2}>
                            <Button className="button-sign">SIGN UP</Button>
                        </Col>
                    </FormGroup>
                    <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
                </Jumbotron>


            </div>
        )
    }
}
export default FooterComponent;