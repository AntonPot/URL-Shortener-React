import React from 'react';
import Table from 'react-bootstrap/Table';
import useClientResponse from './hooks/use-client-response'
import LinkRow from '../link-row/link-row'

const LinksTable = () => {
  const {
    error,
    links,
  } = useClientResponse();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <Table striped bordered hover size="sm" className="links-table">
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Number of Clicks</th>
            <th>Number of Countries</th>
            <th>Created By</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => <LinkRow link={link} index={index} />)}
        </tbody>
      </Table>
    );
  }
};

export default LinksTable;
