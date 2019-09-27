import React from 'react';

import AddedFeature from './AddedFeature';

import { connect } from 'react-redux';

const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.car.features.length ? (
        <ol type="1">
          {props.state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state }
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);