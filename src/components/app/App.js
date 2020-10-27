import React, { useState } from 'react';
import LinksTable from '../links-table/links-table'
import NewLinkForm from '../new-link-form/new-link-form'
import './app.css'

// TODO: Set links state in App component. It should be used by LinksTable and NewLinkForm

const App = () => {
  const [links, setLinks] = useState([]);

  return (
    <div className="main">
      <h3 className="app-title">URL Shortener</h3>
      <NewLinkForm />
      <LinksTable />
    </div>
  );
}

export default App;
