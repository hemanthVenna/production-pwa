import React, { Component } from "react";
import userLanguage from '../helpers/languageConstants.js';
class AlertContainer extends Component {
  render() {
    return (
      <div className="headingSection padtop-80" >
        <div>
          <div>
          {/* Hexagon Widget */}
          <div className="widget activeborder">
          <div className="widgetContents">              
            <div className="hexagonContents">
              <div className="hexaBg"><img src="images/hexagon.png" alt="hexagon" /></div>
              <div className="devImg"><img src="/images/hpLaptop.png" alt="hpLaptop" /></div>
            </div>
            <h4>HP Spectre x360 15</h4>
            <div className="hexagonImg">
            </div>        
          </div>
          </div>
          {/*  welcome Alert */} 
          <div className="widgetAlert none">
            <h4>{userLanguage.en.welcomeHeader}</h4>
            <div><img src="images/ic-welcome.png" alt="welcomeImage"/></div>
            <h6>{userLanguage.en.welcomeMsg}</h6>
            <div className="btnContainer"> <button className="btn btn-primary">{userLanguage.en.iAmHere}</button>
            </div>
          </div>
          {/*  At the store Alert */}
          <div className="widgetAlert none">
            <h4>{userLanguage.en.atStore}</h4>
            <div><img src="images/ic-store.png" alt="storeImage"/></div>
            <h6>{userLanguage.en.atStoreHeader}</h6>
            <p>{userLanguage.en.atStoreSubHeader}</p>
            <div className="btnContainer"> <button className="btn btn-primary">{userLanguage.en.tryAgain}</button>
            </div>
          </div>

          {/*  It's busy Alert */}
          <div className="widgetAlert none">
            <h4>{userLanguage.en.busy}</h4>
            <div><img src="images/ic-busy.png" alt="storeImage"/></div>
            <h6>{userLanguage.en.busyHeader}</h6>
            <p>{userLanguage.en.busySubHeader}</p>
            <div className="btnContainer"> <button className="btn btn-primary">{userLanguage.en.tapToExplore}</button>
            </div>
          </div>

          {/*  It's available Alert */}
          <div className="widgetAlert none">
            <h4>{userLanguage.en.available}</h4>
            <div><img src="images/ic-select.png" alt="storeImage"/></div>
            <h6>{userLanguage.en.availHeader}</h6>
            <p>{userLanguage.en.availSubHeader}</p>
            <div className="btnContainer"> <button className="btn btn-primary">{userLanguage.en.guideMe}</button>
            </div>
          </div>

        {/*  It's unavailable Alert */}
          <div className="widgetAlert none">
            <h4>{userLanguage.en.unavailable}</h4>
            <div><img src="images/ic-busy.png" alt="storeImage"/></div>
            <h6>{userLanguage.en.notFoundOnDemo}</h6>
            <p>{userLanguage.en.likeToExploreSimilar}</p>
            <div className="btnContainer"> <button className="btn btn-primary">{userLanguage.en.tapToExplore}</button>
            </div>
          </div>

        </div>
        </div>
      </div>
    );
  }
}

export default AlertContainer;
