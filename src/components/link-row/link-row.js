import React from 'react';
import Button from 'react-bootstrap/Button';
import useClickHandler from './hooks/use-click-handler'

const LinkRow = (props) => {
  const {
    accessCount,
    countriesCount,
    slug,
    handleDeleteClick,
    handleLinkClick
  } = useClickHandler(props.link, props.handleDelete)

  return (
    <tr className="link-row">
      <td><a href={props.link.url}>{props.link.url.split("://").pop()}</a></td>
      <td><a href={props.link.url} onClick={handleLinkClick}>{slug}</a></td>
      <td>{accessCount}</td>
      <td>{countriesCount}</td>
      <td>{props.link.user_email}</td>
      <td>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={handleDeleteClick}
        >Delete</Button>
      </td>
    </tr>
  );
};

export default LinkRow;
