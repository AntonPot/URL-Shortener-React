import { useState, useEffect } from 'react';

const remoteClient = {
  host: 'http://localhost:3001',
  path: '/links.json',
  uri: () => (remoteClient.host + remoteClient.path),
};

const useClientResponse = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [links, setLinks] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(remoteClient.uri())
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLinks(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return { error, isLoaded, links }
}

export default useClientResponse;