/**
*
* ProfilePage
*
*/

import React from 'react';
import InputText from '../InputText';
import InputDate from '../InputDate';
import TextArea from '../TextArea';
import Button from '../Button';
import styles from './styles.css';
import ProfilePictureSection from '../ProfilePictureSection';

function ProfilePage({ details, inputChange, handleCrop, handleRequestHide, handleFileChange }) {
  const classes = `${styles.profilePage}`;

  return (
    <div className={classes}>
      
      <div className={`${styles.wrapper} col-xs-offset-1 col-xs-10 `}>
        <div className={styles.profileHeader}>
          My Account
          <button className="btn btn-success pull-right button-profile"> <span className="fa fa-floppy-o"></span> Save </button>
          <button className="btn btn-primary pull-right button-profile"> <span className="fa fa-arrow-left"></span> Back </button>
        </div>
        
        <div className={`${styles.section} ${styles.personalInformation}`}>
        
          <div className={styles.sectionHeader}>
            <h5>Personal Information</h5>
          </div>

          <div className='my-account-dropdown-content'>
            <div className="row">
                <div className="col-md-3">

                  <InputText
                    label='First Name'
                    value={details.firstName}
                    name='firstName'
                    onChange={inputChange}
                    placeholder='First Name'
                    errorMessage={details.errors.firstName}
                    size='12'
                    className='mt-m'
                  />

                  <InputDate
                    label='Birthday'
                    value={details.birthday}
                    name='birthday'
                    onChange={inputChange}
                    size='12'
                    className='mt-m'
                  />

                  <InputText 
                    label='Location'
                    value={details.location}
                    name='location'
                    onChange={inputChange}
                    placeholder='Location'
                    size='12'
                    className='mt-m'
                  />
                
                </div>
                <div className="col-md-3">
                  <InputText 
                    label='Last Name'
                    value={details.lastName}
                    name='lastName'
                    onChange={inputChange}
                    placeholder='Last Name'
                    errorMessage={details.errors.lastName}
                    size='12'
                    className='mt-m'
                  />

                  <InputText 
                    label='Phone'
                    value={details.phone}
                    name='phone'
                    onChange={inputChange}
                    placeholder='Phone'
                    size='12'
                    number={true}
                    className='mt-m'
                  />

                  <TextArea
                    label='About Me'
                    value={details.aboutMe}
                    name='aboutMe'
                    onChange={inputChange}
                    size='12'
                    maxlength='200'
                    rows='3'
                    className='mt-m'
                  />
                </div>


                <div className="col-md-6">
{/* 
                    <img id="profileImg" className="img-thumbnail center-block" width="200" alt="your image." src="https://emanagedevstorage.blob.core.windows.net/public/images/profile/9db2757d-83c0-465c-a478-7827157f1228newImage.png" src="https://emanagedevstorage.blob.core.windows.net/public/images/profile/9db2757d-83c0-465c-a478-7827157f1228newImage.png" />

                    <button className="btn btn-primary button-mar">  Upload picture </button> */}

                    <ProfilePictureSection details={details} handleFileChange={handleFileChange} handleCrop={handleCrop} handleRequestHide={handleRequestHide}/>

                </div>

            </div>
          </div>
        </div>

        <div className='account-settings'> 
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
