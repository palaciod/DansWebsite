import React, {Component} from "react";
import '../styles/style.css';
import { Jumbotron, Container, Image } from "react-bootstrap";
import ProfilePic from "../images/dan_palacio_picture01.jpg";
export class About extends Component {

    render(){
        return(
            <div className="aboutPage">
              
              
                <Jumbotron fluid>
                  <Container >
                    <h1>Welcome</h1>
                    <p>
                    I am a self-taught full stack developer with a passion in mobile development. I have been programming for 5 years using a variety of different technologies. Computers have always fascinated me in a way nothing else has. From being able to automate dull tasks to simplifying a complex objective. Computers are here to improve our standard of living like no other technology has been able to do. My main goal in life is to learn as much as possible about computers, software development, and computer science as a whole.
                    </p>
                    <div className="profilePicture">
              <Image src={`${ProfilePic}`}roundedCircle  className="profileImage"/>
              </div>
                  </Container>
  
                </Jumbotron>
            </div>
        );
    };
    
}

export default About;