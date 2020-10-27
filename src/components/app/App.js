import React from 'react';
import LinksTable from '../links-table/links-table'
import NewLinkForm from '../new-link-form/new-link-form'
import './app.css'

const App = () => {
  return (
    <div className="main">
      <h3 className="app-title">URL Shortener</h3>
      <NewLinkForm />
      <LinksTable />
    </div>
  );
}

export default App;
