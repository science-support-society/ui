import React from "react";
import { injectIntl, intlShape } from "react-intl";

import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  padding-left: 10px;
  
  input:checked + label {
    background-color: #A5DC86;
    box-shadow: none;
  }
`;

const Radio = styled.input`
position: absolute !important;
clip: rect(0, 0, 0, 0);
height: 1px;
width: 1px;
border: 0;
overflow: hidden;

:checked {
  background-color: #A5DC86;
  box-shadow: none;
}
`;

const Label = styled.label`
float: left;
display: inline-block;
width: 60px;
background-color: #e4e4e4;
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
font-weight: normal;
text-align: center;
text-shadow: none;
padding: 6px 14px;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 4px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
transition: all 0.1s ease-in-out;

:hover {
  cursor: pointer;
}
`;

const RadioOption = ({ value, message, onToggle, name, intl }) => {
  const id = `${name}_${value}`;
  return (<Wrapper>
    <Radio type="radio" id={id} value={value} name={name} onChange={(e) => onToggle(e)} />
    <Label htmlFor={id} > {message ? intl.formatMessage(message) : value}</Label>
  </Wrapper>);
};

RadioOption.propTypes = {
  value: React.PropTypes.any.isRequired,
  message: React.PropTypes.object,
  onToggle: React.PropTypes.func,
  intl: intlShape.isRequired,
  name: React.PropTypes.string,
};

export default injectIntl(RadioOption);
