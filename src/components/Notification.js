import React, { Component } from "react";
import Feedback from '../components/Feedback';
/*import ApiClient  from '../helpers/ApiClient';
import ApiEndPoints  from '../helpers/ApiEndPoints';*/
// import { find }  from 'lodash';
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0, 
      selectedKey: '', 
      showbtns: false,
      showSharethoughts: false,
      loveIt: false,
      review: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showbtns: true,
      });
    }, this.props.appConstants.timeoutSpan);
  };
  deviceNotFoundAction = () => {
    this.setState({
      showbtns: false,
    });
  };
  deviceFoundAction = () => {
    this.setState({
      showSharethoughts: true,
    });
  };
  loveItAction = () => {
    console.log('okkkkkkk');
  };
  cancel = () => {
    this.props.clickHandler();
  };
  render() {
    const product = this.props.productData;
    const {showSharethoughts} = this.state;
    const {wayFinderSymbol} = this.props;
    return (
      <div>
      
        { 
          !showSharethoughts ?
          <div>
            <div className={`headingTxtmini ${!this.state.showbtns ? 'activeborder' : 'hidden'}`}>
              <h1>{userLanguage.en.findHeader}</h1>
              <div className="deviceTxt">{userLanguage.en.findContent}</div>
            </div>
            <div className={`headingTxtmini ${this.state.showbtns ? 'activeborder' : 'hidden'}`}>
              <h1>{userLanguage.en.foundHeader}</h1>
              <div className="deviceTxt">{userLanguage.en.foundContent}</div>
            </div>
            <div className= "NewsData">
              <div className={`widget wayWidget ${!this.state.showbtns ? 'activeborder' : 'hidden'}`} key={product.DeviceName.toString()}>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="widgetContents">              
                  <div className="wayIcon">
                    <img src={wayFinderSymbol} alt="product" />
                  </div>
                  <hr />
                  <h4>{product.DeviceName}</h4>
                  <div className="hexagonImg">
                    <img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} />
                  </div> 
                  <div className="btnContainer"> 
                    <button className="btn btn-primary" onClick={() => this.cancel()}>{userLanguage.en.cancel}</button>
                  </div>         
                </div>
                </Animated>
              </div>
            </div>
            <div className={`widget topRow ${this.state.showbtns ? 'activeborder' : 'hidden'}`}>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <h4>{product.DeviceName}</h4>
              <div className="img-padding"><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
                <button className="btn active" onClick={() => this.deviceFoundAction()}>{userLanguage.en.yes}</button>
                <button className="btn active" onClick={() => this.deviceNotFoundAction()}>{userLanguage.en.no}</button>
            </Animated>
            </div>
          </div>
          :
          <Feedback productData={product} loveItHandler={this.loveItAction}/>
        }
      </div>
    );
  }
}

export default Notification;
