import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertPopup = (props) => {
  if (props.responseErrors !== '') {
    return (<Alert variant="warning">{props.responseErrors}</Alert>);
  } else {
    return (null);
  }
}

export default AlertPopup;
