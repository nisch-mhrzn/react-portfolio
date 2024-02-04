import { Container, Row, Col ,Nav,Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assests/img/color-sharp2.png";
import projImg1 from"../assests/img/project-img1.png";
import projImg2 from"../assests/img/project-img2.png";
import projImg3 from"../assests/img/project-img3.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
const projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible}) =>
            <div className={isVisible?"animate__animated animate__slideInUp":""}>
            <h2>Projects</h2>
            <p>Lorem4</p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs"defaultActiveKey='first'>
            <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
            <Tab.Pane eventKey='first'>
                <Row>
                    {
                        projects.map((project,index)=>{
                            return(
                                <ProjectCard 
                                key={index}
                                {...project}/>
                                )
                        })
                    }
                </Row>
                    
            </Tab.Pane>
            <Tab.Pane eventKey='second'>Lorem5</Tab.Pane>
            <Tab.Pane eventKey='third'>Lorem5</Tab.Pane>

            </Tab.Content>
            
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default projects;
