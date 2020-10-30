import React from 'react';
import Button from 'react-bootstrap/Button';
import remoteClient from '../../utils/remote-client';

const Link = (props) => (
  <a href={props.url}>{props.url.split(props.splitter).pop() }</a>
);

const LinkRow = (props) => {
  const handleClick = () => {
    props.handleDelete(props.link);
    remoteClient.delete(`/links/${props.link.id}`)
  }

  return (
    <tr className="link-row">
      <td><Link url={props.link.url} splitter={"://"} /></td>
      <td><Link url={props.link.short_url} splitter={"/"} /></td>
      <td>{props.link.access_count}</td>
      <td>{props.link.countries_count}</td>
      <td>{props.link.user_email}</td>
      <td>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={handleClick}
        >Delete</Button>
      </td>
    </tr>
  );
};

export default LinkRow;
