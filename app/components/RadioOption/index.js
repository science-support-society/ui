import React from "react";
import { injectIntl, intlShape } from "react-intl";

const RadioOption = ({ value, key, message, onToggle, name, intl }) => (
  <div>
    <input type="radio" id={key} value={value} name={name} onChange={onToggle} />
    <label htmlFor={key}>{message ? intl.formatMessage(message) : value}</label>
  </div>
);

RadioOption.propTypes = {
  value: React.PropTypes.any.isRequired,
  message: React.PropTypes.object,
  key: React.PropTypes.number,
  onToggle: React.PropTypes.func,
  intl: intlShape.isRequired,
  name: React.PropTypes.string,
};

export default injectIntl(RadioOption);
