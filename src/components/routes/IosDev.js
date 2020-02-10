import React, {Component} from "react";
import '../styles/style.css';
import ProjectNav from "../views/ProjectNav";
import IosProjectView from "../views/IosProjectView";
import StilistaIcon from "../images/stilistaIcon167.png";
export class IosDev extends Component{
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
                <h1>iOS Portfolio</h1>
                <br></br>
                <IosProjectView title={"Stilista"} appIcon ={StilistaIcon} appDesc={"I am the sole iOS developer for Stilista which is still is the process of being approved by the app store. Aluna helps children manage their asthma by gamifying their daily spirometry tests. Aluna connects via bluetooth to an in-home spirometry device."}></IosProjectView>
                <IosProjectView title={"Stilista"} appIcon ={StilistaIcon}></IosProjectView>
                <IosProjectView title={"Stilista"} appIcon ={StilistaIcon} appDesc={"I am the sole iOS developer for Stilista which is still is the process of being approved by the app store. Aluna helps children manage their asthma by gamifying their daily spirometry tests. Aluna connects via bluetooth to an in-home spirometry device."}></IosProjectView>
                </div>
                
            </div>
        );
    }
}

export default IosDev;