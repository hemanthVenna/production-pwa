import React, { Component } from "react";
import ApiClient  from '../helpers/ApiClient';
import ApiEndPoints  from '../helpers/ApiEndPoints';
// import { find }  from 'lodash';
import userLanguage from '../helpers/languageConstants.js';
class NewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: 0, selectedKey: '', showbtns: false};
  }
  selectDevice = (deviceInfo, index) => { 
    this.setState({
      showbtns: false,
    });
    
    const payload = {
      "make": deviceInfo.Make,
      "model": deviceInfo.RDXModel,
      "storeId": this.props.storeId 
    };
    ApiClient.apiPost(ApiEndPoints.SendRawNotification, payload).then((res) => {
        alert('Notification sent successfully.')
        this.setState({
          selectedKey: deviceInfo.RDXModel,
          activeKey: index,
        });
        setTimeout(() => {
          this.setState({
            showbtns: true,
          });
        }, this.props.appConstants.timeoutSpan);
    });
  }

  render() {
  	const {wishlistData} = this.props;
  	const displayData = wishlistData.length > 0 ? wishlistData.map((product, index) => (
      <div className= "NewsData" key={index.toString()}>
        <div className={`widget ${(this.state.activeKey === index) ? 'activeborder' : ''} ${this.state.selectedKey === product.Id ? 'hidden' : ''}`} key={product.Id.toString()}>
          <div><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
          <h2 className="productTitle">{product.DeviceName}</h2>
          <h4>{product.Categories}</h4>
          <button className="btn active" onClick={() => this.selectDevice(product, index)}>{userLanguage.en.tapFind}</button>
        </div>
        <div className={`widget ${this.state.selectedKey === product.Id && !this.state.showbtns ? 'activeborder' : 'hidden'}`} key={product.DeviceName.toString()}>
          <div className="widgetInfo">
            {userLanguage.en.greenLight} 
          </div>
          <div>
            <img src="/images/hexagon.png" alt="product" />
          </div>
          <div className="widgetContents">
            <div className="leftContent">
              {userLanguage.en.personalisedDemo} {product.DeviceName}
            </div>
            <div className="rightContent">
              <img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} />
            </div>          
          </div>
          <div><img src="/images/fourStar.png"  alt="startrating"/></div>
          <h4>(98) {userLanguage.en.seeReviews}</h4>
        </div>
        <div className={`widget ${this.state.selectedKey === product.Id && this.state.showbtns ? 'activeborder' : 'hidden'}`}>
          <div className="widgetInfo">{userLanguage.en.whatDidThink} of <br /> {product.DeviceName}?</div>
          <div className="productImg"><img src={product.DeviceImage} alt={product.DeviceName}  height={125} width={150} /></div>
          <div className="productSurveyBtns">
            <button className="btn active">{userLanguage.en.lovaeIt}</button>
            <a href="https://microsoftmrr.azurewebsites.net/retailer/searchProduct.html"><button className="btn active"> {userLanguage.en.exploreMore}</button></a>
            <button className="btn active">{userLanguage.en.couldNotFound}</button>
          </div>
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

export default NewsComponent;
