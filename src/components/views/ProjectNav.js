import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
// Define our button, but with the use of props.theme this time

export class ProjectNav extends Component {
    
    render() {
        return (
            <div>
                
                <div className="d-flex flex-column">
                    <ButtonGroup size="lg">
                        <Button variant="light"  href="/main/iosdev" >iOS Development</Button>
                        <Button variant="light" href="/main/webdev">Web Development</Button>
                    </ButtonGroup>
                </div>
                
            </div>
        );
    }
}
export default ProjectNav;