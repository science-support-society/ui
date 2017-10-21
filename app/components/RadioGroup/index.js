import React from "react";
import styled from "styled-components";

import ToggleOption from "../RadioOption";

const Wrapper = styled.div`
  padding: 40px;
  overflow: hidden;
  width: 80%;
  font-weight: 400;
  text-align: center;
  font-size: 2vmin;
  margin: auto
`;

const SubmitButton = styled.button`
  width: 96%;
  background-color: #3EC28F;
  box-shadow: none;
  padding: 3vmin 6vmin;
  margin: 3% 1.5%;
  cursor: pointer;
  
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
`;

function ToggleGroup({ name, onToggle, values }) {
  let content = ("Radio group have no props");

  if (values) {
    content = values.map((value, i) => (
      <ToggleOption key={i} value={value} name={name} onToggle={onToggle} />
    ));
  }
  const log = () => console.log("submit me");

  return (
    <Wrapper>
      {content}
      <SubmitButton onClick={log}>SUBMIT MY ANSWER</SubmitButton>
    </Wrapper>
  );
}

ToggleGroup.propTypes = {
  onToggle: React.PropTypes.func,
  values: React.PropTypes.object,
  messages: React.PropTypes.object,
  name: React.PropTypes.string,
};

export default ToggleGroup;
