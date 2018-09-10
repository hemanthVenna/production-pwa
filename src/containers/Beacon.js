import React, { Component } from "react";
import appConstants from "../helpers/appConstants";
//import {isEmpty, uniqWith,  isEqual, find, isUndefined, map, indexOf, includes}  from 'lodash';
import { isUndefined, isEmpty, includes }  from 'lodash';
import DeviceInfo from '../components/DeviceInfo';
import Notification from '../components/Notification';
// import NewsDescription from '../components/NewsDescription';
import ApiClient  from '../helpers/ApiClient';
import ApiEndPoints  from '../helpers/ApiEndPoints';
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
class Beacon extends Component {
  	constructor(props) {
		super(props);
		this.state = {
			wishList: [],
			storeId: '',
			displayDetails: false,
			showList: false,
			showAtStore: false,
			selectedDevice: '',
			notificationSent: false,
			wayFinderSymbol: ''
		};
  	}

  	componentDidMount() {
  		let currentParams = this.props.match.params;
  		let sessionId = (!isUndefined(currentParams.sessionId) && !isEmpty(currentParams.sessionId)) ? currentParams.sessionId : ApiClient.getRequiredKeyCookieValue(appConstants.sessionCookie);
  		document.cookie = appConstants.sessionCookie+"=" + sessionId+ ";path=/;";
	    if (navigator.geolocation) {
	     	navigator.geolocation.getCurrentPosition((position) => {
		        // currentParams = { latitude: position.coords.latitude, longitude: position.coords.longitude, sessionId:sessionId };
		       	currentParams = { latitude: '17.425646', longitude: '78.41799', sessionId:sessionId };   
		        const that = this;
		        ApiClient.apiPost(ApiEndPoints.DevicesBySessionId, currentParams).then(function(res) {
			  		if(res.data.data.length > 0) {
			  			that.setState({wishList: res.data.data, storeId: res.data.nearestStoreId});
			     	} else {
			      		alert(userLanguage.en.saveSessionErr);
			      	}	
			  	});
		  	}, (error) => {
		  		alert(userLanguage.en.browserSettingErr);
	      	});
	    }
  	}
  	handleCancel = () => {
  		this.setState({
			showAtStore: false,
			selectedDevice: '',
			notificationSent: false
		});
  	}
 	handleClick = (selectedProduct) => {
 		let currentParams = this.props.match.params;
  		let sessionId = (!isUndefined(currentParams.sessionId) && !isEmpty(currentParams.sessionId)) ? currentParams.sessionId : '';
	    if (navigator.geolocation) {
	     	navigator.geolocation.getCurrentPosition((position) => {
		        // currentParams = { latitude: position.coords.latitude, longitude: position.coords.longitude, sessionId:sessionId };
		        currentParams = { latitude: '17.425646' , longitude: '78.41799', sessionId:sessionId };   
		        const that = this;
		        ApiClient.apiPost(ApiEndPoints.DevicesBySessionId, currentParams).then(function(res) {
			  		if(res.data.data.length > 0) {
			  			const showAtStore = (res.data.nearestStoreId === null) ? true : false;
			  			that.setState({
			  				wishList: res.data.data, 
			  				storeId: res.data.nearestStoreId,
			  				showAtStore: showAtStore,
			  				selectedDevice: selectedProduct
			  			});
			     		if(showAtStore){
			     			//alert('show not in store');
			     		}else{
			     			that.callNotification();
			     		}
			     	} else {
			      		alert(userLanguage.en.saveSessionErr);
			      	}	
			  	});
		  	}, (error) => {
		  		alert(userLanguage.en.browserSettingErr);
	      	});
	    }
	}
	callNotification = () => {
	    const payload = {
	      "make": this.state.selectedDevice.Make,
	      "model": this.state.selectedDevice.RDXModel,
	      "storeId": this.state.storeId 
	    };
	    ApiClient.apiPost(ApiEndPoints.SendRawNotification, payload).then((res) => {
	        if(res.status === 200){
				this.setState({
					notificationSent: true,
					wayFinderSymbol: res.data.wayFinderSymbol
				});
	        }else{
	        	alert(userLanguage.en.unableAlert)
	        }
	    });
	}
	backButtonClick = () => {
  		this.setState({displayDetails: false});
		window.scrollTo(0, 0);
  	}
  	showList = () => { 
    	this.setState({
      		showList: true,
      	});
  	}
  	getDispayData() {
  		console.log();
  	}
  	render() {
  		console.log()
  		const wishList = this.state.wishList.length > 0 ? this.state.wishList : '';
	  	const showListFlag = this.state.showList;
	  	const uagent = navigator.userAgent.toLowerCase();
  		const isiPhone = includes(uagent, appConstants.iphone);
	  	const { showAtStore, selectedDevice, notificationSent, wayFinderSymbol} = this.state;
  		console.log(wayFinderSymbol);
	  	return (
	      	<div className="headingSection padtop-80" >
	      	<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
	      		{ showListFlag ?
	      			<div className={ showAtStore ? 'none' : '' }> 
	      			{ (!this.state.displayDetails && !notificationSent ) ?
			      		<div>
				      		<div className="headingTxtmini">
					        	<h1>{userLanguage.en.youMadeIt}</h1>
					        	<div className="deviceTxt">{userLanguage.en.successMsgCaption1}<span className="blue">{userLanguage.en.blueLight}</span> {userLanguage.en.successMsgCaption2}</div>
				      		</div>
				      		{wishList ? <DeviceInfo wishlistData={wishList} activeKey="1" clickHandler={this.handleClick} deviceType={isiPhone}/> : ''} 
			      		</div> : '' 
		      		} </div> : 
		      		<div>
				      	<div>
				        	<div> 
				          		<div className="widgetAlert">
						            <h4>{userLanguage.en.welcomeHeader}</h4>
						            <div><img src="/images/ic-welcome.png" alt="welcomeImage"/></div>
						            <h6>{userLanguage.en.welcomeMsg}</h6>
						            <div className="btnContainer"> 
						            	<button className="btn btn-primary"  onClick={() => this.showList()}>{userLanguage.en.iAmHere}</button>
						            </div>
					            </div>
				          	</div>
				        </div>
			      	</div>
	      		}
	      		<div className = {!showAtStore ? 'none' : ''}>
		      		<div>
				      	<div className="widgetAlert">
				            <h4>{userLanguage.en.atStore}</h4>
				            <div><img src="/images/ic-store.png" alt="storeImage"/></div>
				            <h6>{userLanguage.en.atStoreHeader}</h6>
				            <p>{userLanguage.en.atStoreSubHeader}</p>
				            <div className="btnContainer"> 
				            	<button className="btn btn-primary" onClick={() => this.handleClick(selectedDevice)}>{userLanguage.en.tryAgain}</button>
				            </div>
				        </div>
				   	</div>
				</div>
				{notificationSent ? <Notification productData={selectedDevice} wayFinderSymbol={wayFinderSymbol} clickHandler={this.handleCancel} appConstants={appConstants}/> : ''} 
	      	</Animated>
	      	</div>	
	    );
  	}
}

export default Beacon;
