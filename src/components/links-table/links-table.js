import React from 'react';
import Table from 'react-bootstrap/Table';
import useFetchLinks from './hooks/use-fetch-links'
import LinkRow from '../link-row/link-row'

const LinksTable = (props) => {
  const {
    error,
    links,
  } = useFetchLinks();

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
