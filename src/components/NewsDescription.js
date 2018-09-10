import React, { Component } from "react";
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
class NewsDescription extends Component {
  render() {
    const {deviceInfo} = this.props;
    return (
      <div>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <button className="backtoStart top" onClick={this.props.clickHandler}>
          <img src="/images/leftarrow.png" alt="" />{userLanguage.en.backToStart}
        </button>
        <div className="productDisc">
          <h2>{deviceInfo.DeviceName}</h2>
          <div className="productImg">
            <img src={deviceInfo.DeviceImage} alt={deviceInfo.DeviceName} title={deviceInfo.DeviceName} />
          </div>
          <div className="productReview">
            <span><img src="/images/fiveStar.png" alt="" /></span>
            <span>(98) {userLanguage.en.addReview}</span>
          </div>        
        </div>
        <div className="productInfo">
          <img src="/images/fiveStar.png" alt="fivestar" /> <span className="starRating">5</span>
          <h3>I'm so glad i didn't rule out the HP Spectre 360!</h3>
          <h4>Posted 3 weeks ago</h4>
          <p>I did a great amount of research beforehand on the type of 2-1 laptop I wanted to buy. Checked the reviews by customers, by so-called experts as well but ultimately I wanted to be the one to decide what was best for me</p>
          <a className="readMore">Read more</a>
        </div>
        <div className="productInfo">
          <img src="/images/fiveStar.png" alt="fivestar" /> <span className="starRating">5</span>
          <h3>Worked Perfectly Right Out of the Box </h3>
          <h4>Posted 4 weeks ago</h4>
          <p>The 4K display is gorgeous—but it’s set by default to show text at 250% normal size. I set the text size down to 125%— at that size everything is tiny the way i like it. The 16GB DDR4 Ram cannot be</p>
          <a className="readMore">Read more</a>
        </div>
        <div className="productInfo">
          <img src="/images/fiveStar.png" alt="fivestar" /> <span className="starRating">5</span>
          <h3>Fast, beautiful and fits my needs.</h3>
          <h4>Posted 2 months ago</h4>
          <p>I had been shopping for a laptop for months. I waited until after CES 2018 to find out the latest laptops coming out. I wanted 15.6”, 10-key, i7 with 8th gen intel chip and SSD. This laptop checked all</p>
          <a className="readMore">{userLanguage.en.readMore}</a>
        </div>
        <button className="backtoStart" onClick={this.props.clickHandler}>{userLanguage.en.backToStart}</button>
      </Animated>
      </div>
    );
  }
}

export default NewsDescription;
