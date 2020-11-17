import { useState, useEffect } from 'react';
import remoteClient from '../../../utils/remote-client';

const useFetchLinks = (addLinks) => {
  const [error, setError] = useState(null);
  const fetchLinks = async () => {
    const resp = await remoteClient.get('/links')

    if (resp.status === 200) {
      addLinks(resp.data);
    } else {
      setError(resp.data)
    }
  }

  useEffect(() => fetchLinks(), [])

  return { error }
}

export default useFetchLinks;
