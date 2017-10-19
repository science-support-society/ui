import React from "react";

import RadioOption from "../RadioOption";
import Button from "../Button";

const style = {
  fontFamily: "Lucida Grande, Tahoma, Verdana, sans-serif",
  padding: "40px",
  overflow: "hidden",
  zIndex: 100,
};

function RadioGroup({ name, onToggle, values }) {
  let content = ("Radio group have no props");

  if (values) {
    content = values.map((value, i) => (
      <RadioOption key={i} value={value} name={name} onToggle={onToggle} />
    ));
  }
  const log = () => console.log("be");

  return (
    <div style={style}>
      {content}
      <Button onClick={log}>bebebebe</Button>
    </div>
  );
}

RadioGroup.propTypes = {
  onToggle: React.PropTypes.func,
  values: React.PropTypes.object,
  messages: React.PropTypes.object,
  name: React.PropTypes.string,
};

export default RadioGroup;
