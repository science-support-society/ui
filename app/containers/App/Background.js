import React from "react";

export class Background extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    );
  }
}

