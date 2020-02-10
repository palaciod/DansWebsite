import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import projectImage from "../images/vidjotlaptop.png";
export class WebProjectView extends Component {
  render() {
    return (
      <div className='webProjectCell'>
        <h1>{this.props.title}</h1>
        <Image src={projectImage} fluid />
      </div>
    );
  }
}
export default WebProjectView;
