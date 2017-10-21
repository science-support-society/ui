import React from "react";
import { injectIntl, intlShape } from "react-intl";

import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  margin: 1% 1.6%;
  width: 30%;
  
  input:checked + label {
    background-color: #3EC28F;
    box-shadow: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const ToggleButton = styled.input`
position: absolute !important;
clip: rect(0, 0, 0, 0);
height: 1px;
width: 1px;
border: 0;
overflow: hidden;
`;

const Label = styled.label`
display: inline-block;
float: left;
width: 100%;
background-color: #e4e4e4;
color: #3EC28F
text-shadow: none;
padding: 3vmin 6vmin;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 4px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
transition: all 0.1s ease-  in-out;

&:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  background-color: #b3e7d3;
}
&::before {
  content: "$ ";
}
`;

const ToggleOption = ({ value, message, onToggle, name, intl }) => {
  const id = `${name}_${value}`;
  return (<Wrapper>
    <ToggleButton type="radio" id={id} value={value} name={name} onChange={(e) => onToggle(e)} />
    <Label htmlFor={id} > {message ? intl.formatMessage(message) : value}</Label>
  </Wrapper>);
};

ToggleOption.propTypes = {
  value: React.PropTypes.any.isRequired,
  message: React.PropTypes.object,
  onToggle: React.PropTypes.func,
  intl: intlShape.isRequired,
  name: React.PropTypes.string,
};

export default injectIntl(ToggleOption);
