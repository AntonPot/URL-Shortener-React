import React, { useState } from 'react';
import LinksTable from '../links-table/links-table';
import NewLinkForm from '../new-link-form/new-link-form';
import remoteClient from '../../utils/remote-client';

const Home = (props) => {
  const [links, setLinks] = useState([]);
  const [alertMessage, setAlertMessage] = useState('')

  const handleSubmit = (link) => setLinks([...links, link]);
  const handleFetch = (links) => setLinks(links);
  const handleDelete = (link) => setLinks(links.filter((value) => value !== link));
  const handleLogoutClick = async () => {
    const response = await remoteClient.delete('/logout');
    if (response.status === 200) {
      props.handleLogout();
    } else {
      setAlertMessage('Something went wrong')
    }
  };

  return (
    <div className='home'>
      <h5>{alertMessage}</h5>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      <NewLinkForm onSubmit={handleSubmit} />
      <LinksTable onFetch={handleFetch} onDelete={handleDelete} links={links} />
    </div>
  );
};

export default Home;
