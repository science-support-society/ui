import React from 'react';

export class Background extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        {this.props.children}
      </div>
    );
  }
}

Background.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

