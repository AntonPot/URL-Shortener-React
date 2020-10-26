import React from 'react';
import Table from 'react-bootstrap/Table';
import useClientResponse from './hooks/use-client-response'
import LinkRow from '../link-row/link-row'

const LinksTable = () => {
  const {
    error,
    isLoaded,
    links
  } = useClientResponse();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Created By</th>
            <th>Number of Clicks</th>
            <th>Number of Countries Clicks Came From</th>
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
