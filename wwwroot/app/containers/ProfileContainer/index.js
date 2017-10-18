/*
 *
 * ProfileContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectProfileContainer from './selectors';
import { push, goBack } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as ProfileActions from './actions';
import { showLoading } from '../../_shared/actions';

import ProfilePage from '../../components/ProfilePage';

export class ProfileContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  
    //User Details
    this.state = {
      userId: null,
      firstName:'New User',
      lastName:'',
      email:'',
      isActive:true,
      birthday:null,
      phone:'',
      location:'',
      aboutMe:'',
      profilePictureUrl:'',
      pswd1:'',
      pswd2: '',
      inputsAreValid: false,
      errors: { },
      img: null,
      cropperOpen: false,
      showModal: false,
      newPassword: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleCrop = this.handleCrop.bind(this);
    this.handleRequestHide = this.handleRequestHide.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount(){
    const id = this.props.location ? this.props.location.query.t : '';
    
    this.props.actions.showLoading(true);
    this.props.actions.requestProfile(id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps) {
      nextProps.userDetails.phone = nextProps.userDetails ? +nextProps.userDetails.phone : null; //make phone a number
      this.setState(nextProps.userDetails);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log('event ', event);
    console.log('> ', name + ': ' + value);
    
    this.setState({
      [name]: value
    });

    // this.validate(name, value); 
  }

  handleSubmit() {
    
    this.toggleModal();
    let payload = this.mapProperties(this.state);
    
    // if (!this.validateRequiredFields()) return;
    
    this.props.actions.requestSaveProfile(payload);
  }
    
  mapProperties(data){
    
    let payload = Object.assign({}, this.state);
    
    //removing extra properties
    delete payload.errors;
    delete payload.inputsAreValid;
    delete payload.pswd1;
    delete payload.pswd2;
    delete payload.img;
    delete payload.cropperOpen;
    delete payload.activeSection;
    delete payload.originalApplications;
    debugger
    if (this.state.pswd1 && this.state.pswd1.length > 0 ) { // if user entered new password, assign it
      payload.newPassword = this.state.pswd1;
    } else {
      delete payload.newPassword;
    }
    
    return payload ;
  }

  handleFileChange (dataURI) {
    this.setState({
      img: dataURI,
      cropperOpen: true
    });
  }

  handleCrop (dataURI) {
    this.setState({
      cropperOpen: false,
      img: null,
      profilePictureUrl: dataURI
    });
    this.props.actions.requestUploadPicture(this.state.userId, dataURI);
  }

  handleRequestHide() {
    this.setState({
      cropperOpen: false
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <ProfilePage
        details={this.state}
        inputChange={this.handleInputChange}
        handleFileChange={this.handleFileChange}
        handleCrop={this.handleCrop}
        handleRequestHide={this.handleRequestHide}
        saveProfile={this.handleSubmit}
        handleBackButton={this.props.actions.goBack}
        toggleModal={this.toggleModal}
      />
    );
  }
}

const mapStateToProps = selectProfileContainer();

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ProfileActions, {push, goBack, showLoading}), dispatch),    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
