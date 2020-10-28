import remoteClient from '../../../utils/remote-client';
import { useState } from 'react';

// TODO: Use remoteClient answer to update links status in App component

const useSubmitNewLink = () => {
  const [urlInput, setUrlInput] = useState('');
  const [slugInput, setSlugInput] = useState('');

  const handleUrlInputChange = (event) => setUrlInput(event.target.value)
  const handleSlugInputChange = (event) => setSlugInput(event.target.value)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      link: {
        url: urlInput,
        slug: slugInput
      }
    };

    await remoteClient.submit('/links', requestOptions);
  };

  return { handleUrlInputChange, handleSlugInputChange, handleSubmit }
}

export default useSubmitNewLink;
