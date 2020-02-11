import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import stilistaImage from "../images/stilista6.png";
export class SmallIosProjectView extends Component {

    componentDidMount(){
        console.log(`This is my title: ${this.props.title}, and this is my app icon: ${this.props.appIcon}`);
    }
    
    render() {
        return (
            <div className="projectView">
                <br></br>
                <div className="iosRight" style={{float: "none", margin:"auto", width: "80%"}}>
                    
                    <div className="iosImage" >
                        <Image src={this.props.iosImage} fluid/>
                    </div>
                    <div className="smallAppDesc" style={{margin:"10%"}}>
                    <div className="appDesc">
                    <h1>{this.props.title}</h1>
                            <br></br>
                            <h5 style={{textAlign: "center"}}>{this.props.appDesc}</h5>
                            <br></br>
                            <h2 style={{textAlign: "center"}}>Technologies:</h2>
                            <h5 className="appTech" style={{textAlign: "center"}}>MapKit, Firebase Storage, Heroku, Kingfisher, MongoDB, and Node.js/Express for the server.</h5>
                            <br></br>
                            <div className= "buttons" >
                                <Button variant="outline-secondary" className="swiftAppButton" style={{float: "none", margin: "5%"}} href={this.props.link}>GitHub: iOS App Repository</Button>
                                <Button variant="outline-secondary" className="serverButton" style={{float: "none", margin: "1%"}} href={this.props.linkServer}>GitHub: Server Repository</Button>
                            </div>
                            {/* <Button variant="outline-secondary" className="serverButton" style={{float: "none", margin: "5%"}}>GitHub: Server Repository</Button> */}
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}
export default SmallIosProjectView;