import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import colorSharp from "../assests/img/color-sharp.png";

const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>Coding: Proficient in Python, JavaScript, HTML, CSS, C, C++ and knowledge of ReactJS, ExpressJS and NodeJS</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Javascripts</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Machine Learning</h5>
                            </div>
                                
                        </Carousel>
                    </div>
                        
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}
export default Skills;