import React, {Component} from "react";
import '../styles/style.css';
import ProjectNav from "../views/ProjectNav";
import WebProjectView from "../views/WebProjectView";
import lucyPicture from "../images/luc01.png";
import vidjotPicture from "../images/vidjot04.png";
import gitHubFinderPicture from "../images/githubfinder.png";
export class WebDev extends Component{
    constructor(){
        super();
        this.state = {
            opacityNumber: 1,
            smallVersion: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.listentoScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.listentoScroll);
    }

    listentoScroll = () => {
        const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // Need a switch statement
    if (winScroll < 20) {
      this.setState({ opacityNumber: 1 });
    } else if (winScroll < 30) {
      this.setState({ opacityNumber: 0.98 });
    } else if (winScroll < 40) {
      this.setState({ opacityNumber: 0.96 });
    } else if (winScroll < 50) {
      this.setState({ opacityNumber: 0.94 });
    } else if (winScroll < 60) {
      this.setState({ opacityNumber: 0.92 });
    } else if (winScroll < 70) {
      this.setState({ opacityNumber: 0.9 });
    } else if (winScroll < 80) {
      this.setState({ opacityNumber: 0.88 });
    } else if (winScroll < 90) {
      this.setState({ opacityNumber: 0.85 });
    } else if (winScroll < 100) {
      this.setState({ opacityNumber: 0.8 });
    } else if (winScroll < 110) {
      this.setState({ opacityNumber: 0.75 });
    } else if (winScroll < 120) {
      this.setState({ opacityNumber: 0.7 });
    }
    console.log(this.props.height);
    }

    
    
    render(){
        return(
            <div className="body">
                <div className="parallax"
                style={{opacity: this.state.opacityNumber}}>
                    Daniel <span style={{color: "#8B4789"}}>Palacio</span>
                </div>
                <div className="projectSection"><ProjectNav></ProjectNav>
                <br></br>
                <h1>Web Development</h1>
                <br></br>
                <WebProjectView title={"VidJot"} projectImage={vidjotPicture} desc={"I am the sole developer for VidJot which is an app to jot down video ideas. There are two versions of the app, one on for iOS and the other for the web. Below you can find the link to the web application. VidJot is still in the process of being uploaded to the app store.  "} tech = {"Handlebars, node.js, express, passport.js, mongoDB, cookie-storage, cookie-parser, body-parser, mongoose, and bcrypt.js."}></WebProjectView>
                <WebProjectView title={"Lucy Travels"} projectImage={lucyPicture} desc = {"I worked on a website that would demonstrate the adventures of Lucy. The app provides the anecdotal experience Lucy has been through around the world.  "} tech = {"React and Heroku for hosting."}></WebProjectView>
                <WebProjectView title={"GitHub Finder"} projectImage={gitHubFinderPicture} desc={"A web app to locate and view GitHub users. The app also provides details of the user and their repositories."} tech={"React, heroku, and the GitHub Api."}></WebProjectView>
                </div>
                
            </div>
        );
    }
}

export default WebDev;