import remoteClient from '../../../utils/remote-client';
import { useState } from 'react';

// TODO: Make react update links table when new link is created

const useSubmitNewLink = (assignLink) => {
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
    
    const resp = await remoteClient.submit('/links', requestOptions)

    assignLink({
      access_count: 0,
      countreis_count: 0,
      id: null,
      slug: resp.slug,
      url: resp.url,
      user_email: 'hello@email.com',
    });
  };

  return [handleUrlInputChange, handleSlugInputChange, handleSubmit]
}

export default useSubmitNewLink;
