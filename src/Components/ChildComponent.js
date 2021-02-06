import React from "react";
// to install prop-types we nedd to run in the terminal:  npm install prop-types --save-dev
// or npm i prop-types
// then we need to import it.
import PropTypes from "prop-types";

const ChildComponent = (props) => {
  return (
    <div>
      
      {props.Children}

      <h1 style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}>
        {props.fullName}
      </h1>
      <h2 style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}>
        {props.profession}
      </h2>
      <h3 style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}>
        {props.biography}
      </h3>
      {props.handleAlert(props.fullName)}
    </div>
  );
};
// For default props
ChildComponent.defaultProps = {
  fullName: "Riadh Khanchel",
  profession: "Assistant Professor",
  biography: "Not defined yet",
};

// to check for protype use: ReactComponent.propTypes = {.....}
ChildComponent.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  biography: PropTypes.number,
  handleAlert: PropTypes.func,
};
export default ChildComponent;
