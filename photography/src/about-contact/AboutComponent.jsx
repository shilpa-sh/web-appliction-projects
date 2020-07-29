import React,{Component} from 'react';
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import about from "../image/about.JPG";

class AboutComponent extends Component{
    render() {
        const linkNames = this.props;
        return(
            <div style={{border:"4px solid grey"}}>
                <HeaderComponent linkNames={linkNames}/>
                <img className="about-pic" src={about}/>
                <p>
                    <p className="common-text">About Me</p>
                    <p className="inner-text">
                    Born in ?, raised in New Jersey, and forever consumed with answering the question: Why is that compelling? Taking pictures has been a part of my life for as long as I can remember. As a child, I would routinely steal my father's DSLR to shoot portraits of my pet chinchillas and our family dog. Although creating images has been a constant passion and interest, I spent my college years studying music, as an opera singer, and the Meisner method of acting in NYC. It may appear off topic, but I gained immeasurable insight into what it means to work hard, with passion, vision, intention, and artistry. My work is an obsession, so every day and every shoot is an opportunity to learn and to further develop my craft - discovering more about myself, and my fellow earthlings.

                    I primarily shoot digital, but I have a love for analog and darkroom work as well. My portfolio showcases some favorite images from the past few years; I strive to create photographs that not only capture a moment, but also capture a feeling and essence.

                    I am available for private portrait sessions, as well as events in the Delaware Valley and New York Metropolitan areas -- though I would also be very interested in working on location elsewhere.  Prints of my personal work are also available.

                    I'd love to hear from you, so feel free to contact me.
                    </p>
                    <div className="inner-text">
                    Thank you for taking time to look at my site and work; I hope to meet you in the near future.
                    <p>- Shishir Shetty </p>

                    </div>
                </p>
                <FooterComponent/>
            </div>
        )
    }

}

export default AboutComponent;
