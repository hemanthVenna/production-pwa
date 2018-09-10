import React, { Component } from "react";
import ApiClient  from '../helpers/ApiClient';
import ApiEndPoints  from '../helpers/ApiEndPoints';
// import { isUndefined, isEmpty }  from 'lodash';
import appConstants from "../helpers/appConstants";
// import { find }  from 'lodash';
import userLanguage from '../helpers/languageConstants.js';
class HandOff extends Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: 0, selectedKey: '', showbtns: false};
  }
  createWallet = (product) => {
    let sessionId = ApiClient.getRequiredKeyCookieValue(appConstants.sessionCookie);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let inputParam = { 
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude, 
          sessionId:sessionId,
          sku: '',
          make: product.Make,
          model: product.DeviceName,
          storeId: product.SStoreId,
        }
        const that = this;
        ApiClient.apiPost(ApiEndPoints.CreateiosPass, inputParam).then(function(res) {
          if(res.status === 200){
            that.props.walletClickHandler(res.data.passUrl)
          }else{
            alert('pass not created');
          }
        }); 
      })
    }
  }

  render() {
  	const { wishlistData, isIos } = this.props;
  	const displayData = wishlistData.length > 0 ? wishlistData.map((product, index) => (
      <div className= "NewsData" key={index.toString()}>
        <div className={`widget ${(this.state.activeKey === index) ? 'activeborder' : ''} ${this.state.selectedKey === product.Id ? 'hidden' : ''}`} key={product.Id.toString()}>
          <div><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
          <h2 className="productTitle">{product.DeviceName}</h2>
          <h4>{product.Categories}</h4>
          {isIos ? <button className="btn active" onClick={() => this.createWallet(product)}>{userLanguage.en.addToWallet}</button> : ''}
        </div>
      </div>
  	)) : '';
    return (
      <div>
        { displayData ? displayData : ''}
      </div>
    );
  }
}

export default HandOff;
