import React, { Component } from "react";
import deviceData from '../helpers/data/devices';
import { Link } from 'react-router-dom';
import userLanguage from '../helpers/languageConstants.js';
class DeviceInfo extends Component {
  render() {
  	const newsInfoData = deviceData.devices;
    const displayData = newsInfoData.map((news, index) => (
      <div className="col-md-6 deviceContainer" key={news.deviceCode.toString()}>
        <h2>{news.title}</h2>
        <div className="row">
          <div className="col-md-6 col-xs-6 col-sm-6 deviceImg">
            <img src={news.fulldeskimageUri} alt="device" />
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 deviceContent">
            <h3>2-in-1 Convertible <div>USD ${news.price}</div> </h3>
            <Link className="btn learnMore" to={`/pdp/${news.deviceCode}`}>{userLanguage.en.learnMore}</Link>
          </div>
        </div>
      </div>
  	));
    
    return (
      <div>
        {displayData ? displayData : ''}
      </div>
    );
  }
}

export default DeviceInfo;
