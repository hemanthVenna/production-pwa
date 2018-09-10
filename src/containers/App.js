import React, { Component } from "react";
import HomeContainer from '../containers/HomeContainer';
import {Animated} from 'react-animated-css';
class App extends Component {
 
  render() {
    return (
      <div className="headingSection">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div className="headingTxt">
            <HomeContainer />
          </div> 
        </Animated>     
      </div>
    );
  }
}

export default App;
