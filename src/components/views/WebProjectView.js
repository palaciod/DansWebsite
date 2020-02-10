import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import projectImage from "../images/vidjotlaotop.png";
export class WebProjectView extends Component {
  render() {
    return (
      <div className='webProjectCell'>
        <h1>{this.props.title}</h1>
        <div className="iosImage" style={{height: "80%", width: "80%"}}>
            <Image src={projectImage} fluid/>
        </div>
      </div>
    );
  }
}
export default WebProjectView;
