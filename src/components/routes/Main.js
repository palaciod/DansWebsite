import React, {Component} from "react";
import '../styles/style.css';
import ProjectNav from "../views/ProjectNav";
import IosProjectView from "../views/IosProjectView";
import SmallIosView from "../views/SmallIosProjectView";
import StilistaIcon from "../images/stilistaIcon167.png";
import stilistaImage from "../images/stilista6.png";
import MyJournalPicture from "../images/myJournal01.png";
import VidjotPicture from "../images/vidjot01.png";
import VidjotIcon from "../images/vidjotIcon.png";
import MyJournalIcon from "../images/myJournalAppIcon.png";
import ProgrammingWallPaper from "../images/programer-wallpaper.jpg";
import { Image } from "react-bootstrap";
export class Main extends Component{
    constructor(){
        super();
        this.state = {
            opacityNumber: 1,
            smallVersion: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.listentoScroll);
        this.windowSizeAdapter();
        window.addEventListener("resize", this.windowSizeListener);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.listentoScroll);
        window.removeEventListener("resize", this.windowSizeListener);
    }
    windowSizeListener = () => {
      this.windowSizeAdapter();
    }
    windowSizeAdapter(){
      var width = window.innerWidth;
      //console.log(`This is my width: ${width}`);
      if (width < 1159){
       // console.log("trueee");
        this.setState({smallVersion: true});
      }else{
        //console.log("false");
        this.setState({smallVersion: false});
      }
      //console.log(`This is my width: ${width}`);
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
   // console.log(this.props.height);
    }

    
    
    render(){
      if (this.state.smallVersion){
        return(
          <div className="body">
              <div className="parallax"
              style={{opacity: this.state.opacityNumber}}>
                  Daniel <span style={{color: "#8B4789"}}>Palacio</span>
              </div>
              
              <div className="projectSection"><ProjectNav></ProjectNav>
              <br></br>
              <h1>iOS Portfolio</h1>
              
              <SmallIosView tech={"MapKit, Firebase Storage, Heroku, Kingfisher, Passport.js, cookie-storage, cookie-parser, body-parser, MongoDB, mongoose, Node.js, Express, bcrypt.js , and passport.js"} title={"Stilista"} link={"https://github.com/palaciod/Stilista"} linkServer={"https://github.com/palaciod/stilistaServer"} appIcon ={StilistaIcon} iosImage={stilistaImage} appDesc={"I am the sole iOS developer for Stilista which is still is the process of being approved by the app store. Stilista compares your location with nearby users to create a list of hair stylists that are filtered by the distance you choose. Stilista also shows the exact location of the stylist that you wish to meet and allows you request an appointment . A user can sign up as a client or a hair stylist. After an appointment clients can also leave reviews on hair stylists. *Note Map-Kit does not work at all in the iPhone simulator. "}></SmallIosView>
                
              <SmallIosView tech={"Heroku, Passport.js, cookie-storage, cookie-parser, body-parser, MongoDB, mongoose, Node.js, Express, bcrypt.js , and passport.js"}title={"VidJot"} link={"https://github.com/palaciod/VidJotSwift"} linkServer={"https://github.com/palaciod/VidJot"} appIcon ={VidjotIcon} iosImage={VidjotPicture} appDesc={"I am the sole developer for VidJot which also has a web counterpart located below in GitHub or in the next tab. VidJot helps you jot down video ideas when there are no writing utensils in sight. "}></SmallIosView>
                
              <SmallIosView tech={"Passport.js, cookie-storage, cookie-parser, body-parser, MongoDB, mongoose, Node.js, Express, bcrypt.js , and passport.js"} title={"My Journal"} link={"https://github.com/palaciod/My-Journal"} linkServer={"https://github.com/palaciod/MyJournal-Server"} appIcon ={MyJournalIcon} iosImage={MyJournalPicture} appDesc={"I created MyJournal to solidify my understanding of full stack development when it came to iOS applications. As fun as Firebase is Firebase comes nowhere near a custom built back-end. Firebase comes with it’s own limitations that messes up the architecture of the app by clogging the client side of the application with code that’s suppose to be on the server-side. "}></SmallIosView>
              </div>
              
          </div>
      );
      }else{
        return(
          <div className="body">
              <div className="parallax"
              style={{opacity: this.state.opacityNumber}}>
                  Daniel <span style={{color: "#8B4789"}}>Palacio</span>
              </div>
              <div className="projectSection"><ProjectNav></ProjectNav>
              <br></br>
              <h1>iOS Portfolio</h1>
              <br></br>
              <IosProjectView tech={"MapKit, Firebase Storage, Heroku, Kingfisher, Passport.js, cookie-storage, cookie-parser, body-parser, MongoDB, mongoose, Node.js, Express, bcrypt.js , and passport.js"} title={"Stilista"} link={"https://github.com/palaciod/Stilista"} linkServer={"https://github.com/palaciod/stilistaServer"} appIcon ={StilistaIcon} iosImage={stilistaImage} appDesc={"I am the sole iOS developer for Stilista which is still is the process of being approved by the app store. Stilista compares your location with nearby users to create a list of hair stylists that are filtered by the distance you choose. Stilista also shows the exact location of the stylist that you wish to meet and allows you request an appointment . A user can sign up as a client or a hair stylist. After an appointment clients can also leave reviews on hair stylists. *Note Map-Kit does not work at all in the iPhone simulator. "}></IosProjectView>
              <IosProjectView tech={"Heroku, Passport.js, cookie-storage, cookie-parser, body-parser, MongoDB, mongoose, Node.js, Express, bcrypt.js , and passport.js"} title={"VidJot"} link={"https://github.com/palaciod/VidJotSwift"} linkServer={"https://github.com/palaciod/VidJot"} appIcon ={VidjotIcon} iosImage={VidjotPicture} appDesc={"I am the sole developer for VidJot which also has a web counterpart located below in GitHub or in the next tab. VidJot helps you jot down video ideas when there are no writing utensils in sight. "}></IosProjectView>
              <IosProjectView tech={"Passport.js, cookie-storage, cookie-parser, body-parser, MongoDB, mongoose, Node.js, Express, bcrypt.js , and passport.js"} title={"MyJournal"} link={"https://github.com/palaciod/My-Journal"} linkServer={"https://github.com/palaciod/MyJournal-Server"} appIcon ={MyJournalIcon} iosImage={MyJournalPicture} appDesc={"I created MyJournal to solidify my understanding of full stack development when it came to iOS applications. As fun as Firebase is Firebase comes nowhere near a custom built back-end. Firebase comes with it’s own limitations that messes up the architecture of the app by clogging the client side of the application with code that’s suppose to be on the server-side. "}></IosProjectView>
              </div>
              
          </div>
      );
      }
  }
}

export default Main;