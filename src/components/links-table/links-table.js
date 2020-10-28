import React from 'react';
import Table from 'react-bootstrap/Table';
import LinkRow from '../link-row/link-row'
import useFetchLinks from './hooks/use-fetch-links';

const LinksTable = (props) => {
  const {error} = useFetchLinks(props.onFetch);

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
          {props.links.map((link, index) => <LinkRow link={link} index={index} />)}
        </tbody>
      </Table>
    );
  }
};

export default LinksTable;
