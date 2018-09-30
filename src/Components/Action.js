import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button"
            onClick={ props.handleRandomOption }
            disabled={ !props.hasOptions }>
    What Should I Do?</button>
  </div>
);

export default Action;