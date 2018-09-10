import React, { Component } from "react";
import { Modal, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { isUndefined, isEmpty, trim } from 'lodash';
import userLanguage from '../helpers/languageConstants.js';
class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {lat: '', lng: '', show: true};
  }
  handleUserInput = (event, key) => {
    (key === this.props.appConstants.latKey) ? this.setState({lat: event.target.value}) : this.setState({lng: event.target.value});
  }
  submitLocation = () => {
    let latStatus = true;
    let lngStatus = true;
    if(isUndefined(trim(this.state.lat)) || isEmpty(trim(this.state.lat))) {
      latStatus = false;
      alert(this.props.appConstants.emptyLat);
      return false;
    }
    if(isUndefined(trim(this.state.lng)) || isEmpty(trim(this.state.lng))) {
      latStatus = false;
      alert(this.props.appConstants.emptyLng);
      return false;
    }
    if(latStatus && lngStatus){
      this.setState({ show: false });
      this.props.createStorePass(this.state);
    }
  }
  render() {
    return (
      <div>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>{userLanguage.en.storeLocDetails}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>{userLanguage.en.latitude}</ControlLabel>
              <FormControl
                className="margin-bottom"
                type="text"
                value={this.state.lat}
                placeholder={this.props.appConstants.latPlaceholder}
                onChange={(event) => this.handleUserInput(event, this.props.appConstants.latKey)}
              />
            </FormGroup>
            <FormGroup
              controlId="formBasicText"
            > 
              <ControlLabel>{userLanguage.en.longitude}</ControlLabel>
              <FormControl
                className="margin-bottom"
                type="text"
                value={this.state.lng}
                placeholder={this.props.appConstants.lngPlaceholder}
                onChange={(event) => this.handleUserInput(event, this.props.appConstants.lngKey)}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-primary" onClick={this.submitLocation}>{userLanguage.en.submit}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
