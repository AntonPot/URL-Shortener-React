import { useState, useEffect } from 'react';
import remoteClient from '../../../utils/remote-client';

// TODO: Use axios for client call. Use remote-client object

const useClientResponse = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(remoteClient.uri('/links'))
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLinks(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return { error, isLoaded, links }
}

export default useClientResponse;
