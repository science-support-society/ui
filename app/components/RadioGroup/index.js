import React from 'react';

import RadioOption from '../RadioOption';

function RadioGroup(props) {
  let content = ("aaa");

  if (props.values) {
    content = props.values.map((value) => (
      <RadioOption key={value} value={value} message={props.messages[value]} onChange={props.onToggle} />
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
  values: React.PropTypes.array,
  messages: React.PropTypes.object,
};

export default RadioGroup;
