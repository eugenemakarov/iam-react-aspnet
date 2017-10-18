/**
*
* ProfilePage
*
*/

import React from 'react';
import InputText from '../InputText';
import InputDate from '../InputDate';
import TextArea from '../TextArea';
import InputPassword from '../InputPassword';
import Button from '../Button';
import styles from './styles.css';
import ProfilePictureSection from '../ProfilePictureSection';

function ProfilePage({ details, inputChange, handleSaveButton, handleCrop, handleRequestHide, handleFileChange, handleBackButton }) {
  const classes = `${styles.profilePage}`;
  function boom(){};
  return (
    <div className={classes}>
      
      <div className={`${styles.wrapper} col-xs-offset-1 col-xs-10 `}>
        <div className={styles.profileHeader}>
          <div className="row">
            <div className="col-md-9">
              My Account
            </div>
            <div className="col-md-3 text-right">
              <Button
                label='Back'
                color='primary'
                icon='arrow-left'
                className={styles.headerButton}
                onClick={handleBackButton}
              />
              
              <Button
                label='Save'
                color='success'
                icon='floppy-o'
                className={styles.headerButton}
                onClick={handleSaveButton}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
        
          <div className={styles.sectionHeader}>
            <h5>Personal Information</h5>
          </div>

          <div className='content'>
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
                  <ProfilePictureSection
                    details={details}
                    handleFileChange={handleFileChange}
                    handleCrop={handleCrop}
                    handleRequestHide={handleRequestHide}
                    className='mt-m'
                  />
                </div>

            </div>
          </div>
        </div>

        <div className={styles.section}>
        
          <div className={styles.sectionHeader}>
            <h5>Account Settings</h5>
          </div>

          <div className='content'>
            <div className="row">
              <div className="col-md-3">
                <InputPassword
                  label='New Password (optional)'
                  name='pswd1'
                  value={details.pswd1}
                  onChange={inputChange}
                  placeholder=''
                  errorMessage={details.errors.pswd1}
                  size='12'
                  className='mt-m'
                />

                  <Button
                    label='Logout all sessions'
                    color='default'
                    className={styles.disabledButton}
                    disabled
                    onClick={boom}
                  />
              </div>
              <div className="col-md-3">
                <InputPassword
                  label='Retype new Password'
                  name='pswd2'
                  value={details.pswd2}
                  onChange={inputChange}
                  placeholder=''
                  errorMessage={details.errors.pswd2}
                  size='12'
                  className='mt-m'
                />

                  <Button
                    label='Deactivate account'
                    color='default'
                    disabled
                    onClick={boom}
                    className={styles.disabledButton}
                  />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <small>2017 Direct Focus Online</small>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <small>Help and Feedback</small>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
