import { useState, useEffect } from 'react';
import remoteClient from '../../../utils/remote-client';

const useFetchLinks = (assignLinks) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      const resp = await remoteClient.fetch('/links')

      if (resp.status === 200) {
        assignLinks(resp.data);
      } else {
        setError(resp.data)
      }
    }

    fetchLinks()
  }, [])

  return { error }
}

export default useFetchLinks;
