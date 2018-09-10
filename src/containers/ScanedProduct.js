import React, { Component } from "react";
/*import { map, indexOf}  from 'lodash';
import deviceData from '../helpers/data/devices';*/
import Handoff from '../components/Handoff';
import { isUndefined, isEmpty, includes }  from 'lodash';
// import HomeContainer from '../containers/HomeContainer';
import ApiClient  from '../helpers/ApiClient';
import appConstants from "../helpers/appConstants";
import ApiEndPoints  from '../helpers/ApiEndPoints';
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
/*const { detect } = require('detect-browser');
const browser = detect();*/
class ScanedProduct extends Component {
    constructor(props) {
    super(props);
      this.state = {
        Listskus: '',
        wishList: [],
        storeId: '',
        loaded: false,
        activePass: ''
      };
    }

    componentDidMount() {
      let currentParams = this.props.match.params;
      let sessionId = (!isUndefined(currentParams.sessionId) && !isEmpty(currentParams.sessionId)) ? currentParams.sessionId : '';
      document.cookie = appConstants.sessionCookie+"=" + sessionId+ ";path=/;";
      const that = this;
      if(navigator){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            //currentParams = { latitude: "17.425646", longitude: "78.4201999", sessionId:sessionId };
            currentParams = { latitude: position.coords.latitude, longitude: position.coords.longitude, sessionId:sessionId };  
            ApiClient.apiPost(ApiEndPoints.DevicesBySessionId, currentParams).then(function(res) {
              if(res.data.data.length > 0) {
                const uagent = navigator.userAgent.toLowerCase();
                let isiPhone = includes(uagent, appConstants.iphone);
                isiPhone ? that.createPass(currentParams, res.data.data) : that.getDispayData();
                that.setState({wishList: res.data.data, storeId: res.data.nearestStoreId, loaded: true});
              } else {
                alert(userLanguage.en.saveSessionErr);
              } 
            });
          }, function() {
             alert(userLanguage.en.locatServFail);
          });
        } else {
          // Browser doesn't support Geolocation
          alert(userLanguage.en.browserNotSupportGeo);
        }
      }else{
        alert(userLanguage.en.navNotFound);
      }
    };
  createPass = (inputParam, wishlist) => {
      if(wishlist.length > 0){
        inputParam.sku = '';
        inputParam.make = wishlist[0].Make;
        inputParam.model = wishlist[0].DeviceName;
        inputParam.storeId = wishlist[0].SStoreId;
        const that = this;
        ApiClient.apiPost(ApiEndPoints.CreateiosPass, inputParam).then(function(res) {
          if(res.status === 200){
            that.assignWalletPass(res.data.passUrl);
          }else{
            alert(userLanguage.en.passNotCreated);
          }
        });
      }
    }

    assignWalletPass= (passUrl) => {
      this.setState({activePass: passUrl});
    }
    getDispayData() {
      console.log();
    }

  render() {
    const { wishList, activePass } = this.state;
    const storeId = this.state.storeId ? this.state.storeId : '';
    const displayText = wishList.length > 0 ? wishList : '';
    const uagent = navigator.userAgent.toLowerCase();
    let isiPhone = includes(uagent, appConstants.iphone);
    const downloadPass = (isiPhone && !isEmpty(activePass)) ? true : false;
    return (
      <div className="headingSection" >
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        { downloadPass ? <iframe width="1" height="1" src={activePass} title="test"></iframe> : '' }
        <div className={`headingTxtBeacon ${!displayText ? 'bgWhite' : ''}`}>
          { displayText ?
            <div className="padtop-80">
              <div className="bgWhite">
                <h1>{userLanguage.en.oneStepAway}</h1>
                <div className="deviceTxt">{userLanguage.en.saveForInStoreExp}</div>
              </div>
							<div className="grayBg">
								<Handoff wishlistData={displayText} appConstants={appConstants} storeId={storeId} isIos={isiPhone} walletClickHandler={this.assignWalletPass}/>
							</div>
						</div> : ''
					}
				</div>
        </Animated>
			</div>
    );
  }
}

export default ScanedProduct;
