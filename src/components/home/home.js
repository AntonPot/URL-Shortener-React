import React, { useState } from 'react';
import LinksTable from '../links-table/links-table';
import NewLinkForm from '../new-link-form/new-link-form';

const Home = () => {
  const [links, setLinks] = useState([]);

  const handleSubmit = (link) => setLinks([...links, link]);
  const handleFetch = (links) => setLinks(links);
  const handleDelete = (link) => setLinks(links.filter((value) => value !== link));

  return (
    <div className='home'>
      <NewLinkForm onSubmit={handleSubmit} />
      <LinksTable onFetch={handleFetch} onDelete={handleDelete} links={links} />
    </div>
  );
};

export default Home;
