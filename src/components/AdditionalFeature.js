import React from 'react';

import { connect } from 'react-redux';
import { addFeature } from '../actions/index';

const AdditionalFeature = props => {
  console.log(props);
  const onClickFeature = e => {
    e.preventDefault();
    props.addFeature(props.props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={onClickFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return { props: state }
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);