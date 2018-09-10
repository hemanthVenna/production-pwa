import React, { Component } from "react";
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
class DeviceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: this.props.activeKey, selectedKey: '', deviceType: this.props.deviceType};
  }

  selectDevice = (deviceData) => {
    //this.setState({activeKey: deviceData.deviceCode })
    this.props.clickHandler(deviceData);
  }

  render() {
  	const {wishlistData} = this.props;
  	const displayData = wishlistData.length > 0 ? wishlistData.map((product, index) => (
        <div key={product.Id.toString()} className={this.state.deviceType ? 'wallet' : ''}>
          <div className={`widget topRow`}>
            <div><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
            <h2 className="productTitle">{product.DeviceName}</h2>
            <h4>{product.Categories}</h4>
            {/*<h4>USD $200</h4>*/}
            <button className="btn active" onClick={() => this.selectDevice(product)}>{userLanguage.en.tapFind}</button>
          </div>
          <div className="deviceButtons">
           {  /*this.state.deviceType ? <button className="btn active"><a href={product.passkey} download><img src="/images/apple.png" alt="Apple"/>Add to Apple Wallet</a></button> : ''*/ }
          </div>
        </div>
  	)) : '';
    return (
      <div>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        {(displayData) ? displayData : ''}
      </Animated>
      </div>
    );
  }
}

export default DeviceInfo;
