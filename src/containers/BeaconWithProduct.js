import React, { Component } from "react";
import { map, indexOf, find, isUndefined, uniqWith, isEqual }  from 'lodash';
import deviceData from '../helpers/data/devices';
import NewsComponent from '../components/NewsComponent';
import ApiClient  from '../helpers/ApiClient';
import appConstants from "../helpers/appConstants";
import ApiEndPoints  from '../helpers/ApiEndPoints';
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
class BeaconWithProduct extends Component {
  	constructor(props) {
	 	super(props);
	  	this.state = {Listskus: ''};
  	}

  	componentDidMount() {
  		let currentParams = this.props.match.params;
		let sel_obj_cookie = ApiClient.getRequiredKeyCookieValue(appConstants.cookieName);
		sel_obj_cookie = (sel_obj_cookie !== undefined && sel_obj_cookie !== '' && sel_obj_cookie.length > 0) ? JSON.parse(sel_obj_cookie) : [];
		if(sel_obj_cookie !== '' && sel_obj_cookie.length > 0) {
	    	currentParams['uniqueId'] = sel_obj_cookie[0]['uniqueId'];
		}
		const isExisting = find(sel_obj_cookie, { 'storeId': currentParams['storeId'], 'sku': currentParams['sku'] });
		if(isUndefined(isExisting)) {
		    const that = this;
		    ApiClient.apiPost(ApiEndPoints.SaveSession, currentParams).then(function(res) {
		      	if(res.data.status === 200) {
		      		that.setState({
			      		storeId: currentParams['storeId'],
						sku: currentParams['sku'],
						uniqueId: res.data.uniqueId
					});
					let pushData = {
						'storeId': currentParams['storeId'],
						'sku': currentParams['sku'],
						'uniqueId': res.data.uniqueId
					};
					that.doPostOperation(sel_obj_cookie, pushData);
		     	} else {
		      		alert(userLanguage.en.saveSessionErr);
		      	}
		    });
		} else {
			this.getCookieDevices();
		} 
  	}
 	doPostOperation(sel_obj_cookie, pushData) {
	  	sel_obj_cookie.unshift(pushData);
		const temp = uniqWith(sel_obj_cookie, isEqual);
		if(temp.length > 0) {
			let stringObj = JSON.stringify(temp);
			document.cookie = appConstants.cookieName+"=" + stringObj+ ";path=/;";	
		}
		this.getCookieDevices();
		//this.setState({Listskus: skus}, () => {this.getDispayData();});
	}

  	getDispayData() {
  		console.log();
  	}
  	getCookieDevices(){
  		let currentParams = [];
		let sel_obj_cookie = ApiClient.getRequiredKeyCookieValue(appConstants.cookieName);
		sel_obj_cookie = (sel_obj_cookie !== undefined && sel_obj_cookie !== '' && sel_obj_cookie.length > 0) ? JSON.parse(sel_obj_cookie) : [];
		if(sel_obj_cookie !== '' && sel_obj_cookie.length > 0) {
			currentParams = sel_obj_cookie.map((key, index) => {
				let temp = [];
		    	temp['uniqueId'] = key['uniqueId'];
		    	temp['storeId'] = key['storeId'];
		    	temp['sku'] = key['sku'];
		    	return temp;
			});
		}
		if(currentParams.length > 0) {
			const skus = map(currentParams, 'sku');
			this.setState({Listskus: skus}, () => {this.getDispayData();});
		}
  	}
  	render() {
	  	const {Listskus} = this.state;
	  	const displayText = Listskus.length > 0 ? deviceData.devices.filter((item) => {
	  		return indexOf(Listskus, item.deviceCode) > -1;
	  	}) : '';
	    return (
			<div className="headingSection" >
			<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
				<div className={`headingTxtBeacon ${!displayText ? 'bgWhite' : ''}`}>
					{ displayText ?
						<div className="padtop-80">
							<div className="bgWhite">
								<h1>{userLanguage.en.timeToExplore}</h1>
								<h4>{userLanguage.en.tapToActInStoreDemo}</h4>
							</div>
							<div className="grayBg">
								<NewsComponent newsInfoData={displayText} appConstants={appConstants}/>
							</div>
						</div> : ''
					} 
				</div>
				</Animated>
			</div>
	    );
  	}
}

export default BeaconWithProduct;
