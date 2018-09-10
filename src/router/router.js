import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../containers/App";
import ScanedProduct from "../containers/ScanedProduct";
import Beacon from "../containers/Beacon";
import BeaconWithProduct from "../containers/BeaconWithProduct";
import PdpContainer from "../containers/PdpContainer";
import AlertContainer from "../containers/AlertContainer";
import Header from "../header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/beacon-scan/:sessionId/:flag" component={Beacon} />
          <Route path="/product-scan/:sessionId/:flag" component={ScanedProduct} />
          <Route path="/device-list/:storeId/:sku" component={BeaconWithProduct} />
          <Route path="/pdp/:skuId" component={PdpContainer} />
          <Route path="/alerts" component={AlertContainer} />
          <Route component={App}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
