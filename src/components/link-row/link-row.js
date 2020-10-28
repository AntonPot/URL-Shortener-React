import React from 'react';

const LinkRow = (props) => (
  <tr className="link-row">
    <td>{props.link.url}</td>
    <td>{props.link.slug}</td>
    <td>{props.link.access_count}</td>
    <td>{props.link.countries_count}</td>
    <td>{props.link.user_email}</td>
  </tr>
);

export default LinkRow;
