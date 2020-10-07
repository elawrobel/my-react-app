import React from 'react';

function Button(props) { // function Button({ label })
  // const { label } = props;

  return(
    // <button>{props.label}</button>
    <button type={props.type}>{props.label}</button>
  );
}

Button.defaultProps = {
  label: 'Click now',
  type: 'submit'
}

export default Button;