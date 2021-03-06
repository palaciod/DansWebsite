import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import stilistaImage from "../images/stilista6.png";
export class IosProjectNav extends Component {

    componentDidMount(){
        console.log(`This is my title: ${this.props.title}, and this is my app icon: ${this.props.appIcon}`);
    }
    
    render() {
        return (
            <div className="projectView">
                <br></br>
                
                <div className="projectCell">
                    {/* Splite Div into two */}
                    <div className="iosLeft">
                        <div className="topLeft">
                            <div className="appIcon">
                            <Image src={this.props.appIcon} rounded />
                            </div>
                            <br></br>
                            <br></br>
                            <h1 className="appTitle"><span style={{color: "#8B4789"}}>{this.props.title}</span></h1>
                        </div>
                        <div className="appDesc">
                            <br></br>
                            <h5>{this.props.appDesc}</h5>
                            <br></br>
                            <h2>Technologies:</h2>
                            <h5 className="appTech">{this.props.tech}</h5>
                            <br></br>
                            <div className= "buttons" >
                                <Button variant="outline-secondary" className="swiftAppButton" href={this.props.link}>GitHub: iOS App Repository</Button>
                                <Button variant="outline-secondary" className="serverButton" href={this.props.linkServer}>GitHub: Server Repository</Button>
                            </div>
                        </div>
                    </div>
                    <div className="iosRight">
                        <div className="iosImage">
                        <Image src={this.props.iosImage} fluid/>
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}
export default IosProjectNav;