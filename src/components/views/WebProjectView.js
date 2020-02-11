import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import projectImage from "../images/vidjot04.png";
export class WebProjectView extends Component {
  render() {
    return (
      <div className='webProjectCell'>
        <div className="iosImage" style={{height: "auto", width: "80%"}}>
            <Image src={this.props.projectImage} fluid/>
        </div>
        <div className="webDesc">
        <div className="smallAppDesc" style={{margin:"10%"}}>
                    <div className="appDesc">
                    <h1>{this.props.title}</h1>
                            <br></br>
                            <h5 style={{textAlign: "center"}}>{this.props.desc}</h5>
                            <br></br>
                            <h2 style={{textAlign: "center"}}>Technologies:</h2>
    <h5 className="appTech" style={{textAlign: "center"}}>{this.props.tech}</h5>
                            <br></br>
                            <div className= "buttons" >
                                <Button variant="outline-secondary" className="swiftAppButton" style={{float: "none", margin: "5%"}} href={this.props.link}>View Project</Button>
                                <Button variant="outline-secondary" className="serverButton" style={{float: "none", margin: "1%"}} href={this.props.sourceCode}>View Code</Button>
                            </div>
                            {/* <Button variant="outline-secondary" className="serverButton" style={{float: "none", margin: "5%"}}>GitHub: Server Repository</Button> */}
                        </div>
                    </div>
        </div>
        <br></br>
        
      </div>
    );
  }
}
export default WebProjectView;
