import React, { Component } from "react";
import { PanelGroup, Panel } from 'react-bootstrap';
import DeviceList from '../components/DeviceList';
import {Animated} from 'react-animated-css';
import userLanguage from '../helpers/languageConstants.js';
class HomeContainer extends Component {
  render() {
    return (
      <div className="headingSection">
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="bannerSection">
          <div className="row banner">
            <div className="col-md-5 bannerTxt">
              <span>
                {userLanguage.en.landingPageHeader}
              </span>
            </div>
            <div className="col-md-7 bannerImg">
              <img src="/images/Image-play.png" alt="banner" />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="winDevices">
              {userLanguage.en.chooseSubHeader}
            </div>
            <PanelGroup accordion id="accordion-example" className="accordion">
              <Panel eventKey="1" className="card">
                <Panel.Heading>
                  <Panel.Title toggle>
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <img src="/images/pcselect.png" alt="pc select "/>
                          {userLanguage.en.panelHeader1}
                          <span className="hidden-xs pull-right quoteTxt">{userLanguage.en.panelSubHeader1} </span>
                        </button>
                      </h5>
                    </div>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <div id="smartassistant-advisor"></div>
                </Panel.Body>
              </Panel>
              <Panel eventKey="2" className="card">
                <Panel.Heading>
                  <Panel.Title toggle>
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <img src="/images/windows.png" alt="pc select " />{userLanguage.en.panelHeader2} <span className="hidden-xs pull-right quoteTxt">{userLanguage.en.panelSubHeader2} </span>
                        </button>
                      </h5>
                    </div>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <div className="card-body windowsTab">
                    <div className="row tabRow">
                      <div className="col-md-6">
                         <div className="videoContainer">
                          <video className="video" poster="images/video2.png" width="100%" height="100%" preload="true" controls="true">
                            <source src="images/MS_RetailReimagined_Why-Windows_H264_1920p30_9x16_MOS.mp4" type="video/mp4" />
                          </video>
                        </div> 
                      </div>
                      <div className="col-md-6">
                        <img className="windowLogo" src="/images/winLogo.png" alt="windows Logo" />
                        <p>
                          {userLanguage.en.winLogoData}
                        </p>
                        <div>
                          <a className="btn learnMore">{userLanguage.en.learnMore}</a>
                        </div>
                      </div>
                    </div>
                    <div className="row tabRow">
                      <div className="col-md-6 pull-right">
                         <img className="windowsImg" src="/images/office.png" alt="windows" /> 
                      </div>
                      <div className="col-md-6">
                        <img className="windowLogo" src="/images/officeLogo.png" alt="office Logo" />
                        <p>
                          {userLanguage.en.ofcLogoData}
                        </p>
                        <div>
                          <a className="btn learnMore">{userLanguage.en.learnMore}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
              <Panel eventKey="3" className="card">
                <Panel.Heading>
                  <Panel.Title toggle>
                  <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <img src="/images/hardware.png" alt="pc select " /> {userLanguage.en.panelHeader3} <span className="hidden-xs pull-right quoteTxt">{userLanguage.en.panelSubHeader3}</span>
                    </button>
                  </h5>
                </div>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <div className="card-body">
                    <div className="row hardwareTab">
                      <div className="col-md-6">
                        <div className="videoContainer">
                          <video className="video" poster="images/video1.png" width="100%" height="100%" preload="true" controls="true">
                            <source src="images/MS_RetailReimagined_Why-Modern_H264_1920p30_9x16_MOS.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                      <div className="col-md-6">
                        <img className="video2" src="/images/video2.png" alt="video2" height="298"/>
                        <h6>Lorem ipsum dolor sit amet consectetur</h6>
                      </div>
                    </div>
                    <div className="row devicesRow">
                      <div className="recomemdedDevices">Recommended Devices</div>
                      <div className="col-md-6 deviceContainer">
                        <h2> HP Spectre x360 13 </h2>
                        <div className="row">
                          <div className="col-md-6 col-xs-6 col-sm-6 deviceImg">
                            <img src="/images/device1.png" alt="device" />
                          </div>
                          <div className="col-md-6 col-xs-6 col-sm-6 deviceContent">
                            <h3>2-in-1 Convertible <div>USD $1199</div> </h3>
                            <a href="pdp.html" className="btn learnMore">Learn more</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 deviceContainer">
                        <h2> Samsung Galaxy Book 10 </h2>
                        <div className="row">
                          <div className="col-md-6 col-xs-6 col-sm-6 deviceImg">
                            <img src="/images/device2.png" alt="device" />
                          </div>
                          <div className="col-md-6 col-xs-6 col-sm-6 deviceContent">
                            <h3>2-in-1 Detachable <div>USD $629</div> </h3>
                           <a href="pdp.html" className="btn learnMore">Learn more</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                </Panel.Body>
              </Panel>
              <Panel eventKey="4" className="card">
                <Panel.Heading>
                  <Panel.Title toggle>
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <img src="/images/device.png" alt="pc select " /> {userLanguage.en.panelHeader4} <span className="hidden-xs pull-right quoteTxt">{userLanguage.en.panelSubHeader4}</span>
                        </button>
                      </h5>
                  </div>
                </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <div className="card-body">
                    <div className="row devicesRow">
                      <DeviceList />
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </PanelGroup>
          </div>
        </div>  
        </Animated>    
      </div>
    );
  }
}

export default HomeContainer;
