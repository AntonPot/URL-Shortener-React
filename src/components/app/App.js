import React, { useState } from 'react';
import LinksTable from '../links-table/links-table';
import NewLinkForm from '../new-link-form/new-link-form';
import './app.css';

const App = () => {
  const [links, setLinks] = useState([]);

  const handleSubmit = (link) => setLinks([...links, link]);

  return (
    <div className="main">
      <h3 className="app-title">URL Shortener</h3>
      <NewLinkForm />
      <LinksTable onLoad={setLinks} links={links} />
    </div>
  );
}

export default App;
