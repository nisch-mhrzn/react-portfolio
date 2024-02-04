import {Container,Row,Col} from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import logo from '../assests/img/logo.svg'
import navIcon from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";


const Footer =()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm ={6}>
                        <img src ={logo}alt ="Logo"/>
                    </Col>
                    <Col sm={6 }className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon}/></a>
                        <a href="#"><img src={navIcon2}/></a>
                        <a href="#"><img src={navIcon3}/></a>

                    </div>
                    <p>Copyright 2024. All Right Reserved</p>
                        
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}
export default Footer;