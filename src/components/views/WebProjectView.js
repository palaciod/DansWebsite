import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";

export class WebProjectView extends  Component {


    render(){
        return(
            <div className="webProjectCell">
                <h1>{this.props.title}</h1>
            </div>
        );
    }

}
export default WebProjectView;