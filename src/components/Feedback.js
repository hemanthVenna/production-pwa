import React, { Component } from "react";
import NewsDescription from '../components/NewsDescription';
/*import ApiClient  from '../helpers/ApiClient';
import ApiEndPoints  from '../helpers/ApiEndPoints';*/
// import { find }  from 'lodash';
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loveIt: false,
      review: false,
      buyNow: false
    };
  }

  loveIt = () => {
    this.setState({
      loveIt: false,
      review: false,
      buyNow: true
    });
  };
  showReview = () => {
    this.setState({
      loveIt: false,
      review: true,
      buyNow: false
    });
  }
  backButtonClick = () => {
    this.setState({
      loveIt: false,
      review: false,
      buyNow: false
    });
  }
  buyNowAction = () => {
    this.setState({
      loveIt: false,
      review: false,
      buyNow: true
    });
  }
  render() {
    const product = this.props.productData;
    const {loveIt, review, buyNow} = this.state;
    return (
      <div>
        <div className={ (loveIt || review || buyNow) ? 'none' : '' }>
          <div className="headingTxtmini">
            <h1>{userLanguage.en.feedBackHeader1}</h1>
            <div className="deviceTxt">{userLanguage.en.feedBackContent1}</div>
          </div>
          <div className="widget topRow activeborder">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <h4>{product.DeviceName}</h4>
            <div className="img-padding"><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
            <div className="productRating">
              <div><img src="/images/fiveStar.png" alt="" /></div>
              <span className="cursor" onClick={() => this.showReview()}>(98) {userLanguage.en.seeReviews}</span>
            </div> 
            <button className="btn active" onClick={() => this.loveIt()}>{userLanguage.en.loveIt}</button>
            <button className="btn active">{userLanguage.en.exploreMore}</button>
           {/* <button className="btn active" onClick={() => this.showReview()}>{userLanguage.en.rr}</button>*/}
            </Animated>
          </div>
        </div>
        <div className={ !loveIt ? 'none' : '' }>
          <div className="headingTxtmini">
            <h1>{userLanguage.en.feedBackHeader2}</h1>
            <div className="deviceTxt">{userLanguage.en.feedBackContent2}</div>
          </div>
          <div className="widget topRow activeborder">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
            <button className="btn active" onClick={() => this.buyNowAction()}>{userLanguage.en.buyNow}</button>
            <button className="btn active">{userLanguage.en.exploreMore}</button>
          </Animated>
          </div>
        </div>
        <div className={ !review ? 'none' : '' }>
          <NewsDescription deviceInfo={product} clickHandler={this.backButtonClick}/>
        </div>
        <div className={ !buyNow ? 'none' : '' }>
          <div className="headingTxtmini">
            <h1>{userLanguage.en.feedBackHeader3}</h1>
            <div className="deviceTxt ">{userLanguage.en.feedBackContent3}</div>
          </div>
          <div className="widget topRow activeborder">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <h4>{product.DeviceName}</h4>
            <div className="img-padding"><img src={product.DeviceImage} alt={product.DeviceName} title={product.DeviceName} /></div>
          </Animated>
          </div>
          <button className="btn btn-back">{userLanguage.en.backToHome}</button>
        </div>
      </div>
    );
  }
}

export default Feedback;
