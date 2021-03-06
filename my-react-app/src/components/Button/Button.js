import React from 'react';

function Button(props) { // function Button({ label, color })
  // const { label } = props;
  return (
    // <button>{props.label}</button>
    <button className="button_send" type={props.type}>{props.children}</button>
  );
}
Button.defaultProps = {
  label: 'Enter label for button',
  type: 'submit'
}

export default Button;