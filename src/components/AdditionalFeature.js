import React from "react";
import { addNewFeature } from "../actions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          addNewFeature(props.feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addNewFeature })(AdditionalFeature);
