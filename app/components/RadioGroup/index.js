import React from "react";

import RadioOption from "../RadioOption";

function RadioGroup(props) {
  let content = ("Radio group have no props");

  if (props.values) {
    content = props.values.map((value) => (
      <RadioOption key={value} value={value} name={props.name} onChange={props.onToggle} />
    ));
  }

  return (
    <div>
      {content}
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
