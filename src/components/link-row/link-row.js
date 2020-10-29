import React from 'react';

const Link = (props) => (
  <a href={props.url}>{props.url.split(props.splitter).pop() }</a>
);

const LinkRow = (props) => (
  <tr className="link-row">
    <td><Link url={props.link.url} splitter={"://"} /></td>
    <td><Link url={props.link.short_url} splitter={"/"} /></td>
    <td>{props.link.access_count}</td>
    <td>{props.link.countries_count}</td>
    <td>{props.link.user_email}</td>
  </tr>
);

export default LinkRow;
