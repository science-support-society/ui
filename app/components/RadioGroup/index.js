import React from "react";
import styled from "styled-components";

import ToggleOption from "../RadioOption";
import Button from "../Button";

const Wrapper = styled.div`
  font-family: Lucida Grande, Tahoma, Verdana, sans-serif;
  padding: 40px;
  overflow: hidden;
  // z-index: 100;
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
      <Button onClick={log}>SUBMIT MY ANSWER</Button>
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
