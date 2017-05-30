import { connect } from './../store';
import React from 'react';

export default connect(function({ isLoading, accountManagerName }) {
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <div>{ accountManagerName }</div>;
});
