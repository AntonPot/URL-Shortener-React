import { useState, useEffect } from 'react';
import remoteClient from '../../../utils/remote-client';

const useFetchLinks = () => {
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);

  const handleFetch = async () => {
    const resp = await remoteClient.fetch('/links')

    if (resp.status === 200) {
      setLinks(resp.data);
    } else {
      setError(resp.data)
    }
  }

  useEffect(() => handleFetch(), [])

  return { error, links }
}

export default useFetchLinks;
