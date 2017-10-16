/*
 *
 * ProfileContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectProfileContainer from './selectors';

export class ProfileContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        this is profile page
      </div>
    );
  }
}

const mapStateToProps = selectProfileContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
