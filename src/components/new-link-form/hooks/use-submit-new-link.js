import remoteClient from '../../../utils/remote-client';
import { useState } from 'react';

const useSubmitNewLink = (addLink) => {
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
    
    const response = await remoteClient.post('/links', requestOptions)

    addLink(response.data);
  };

  const handleDownload = async () => {
    // NOTE: Use 'js-file-download' for cleaner solution
    // https://stackoverflow.com/a/41940307/5015533
    const response = await remoteClient.get('/downloads/new');
    const contentType = response.headers['content-type'];
    const filename = response.headers['content-disposition'].split('filename=')[1]
    const element = document.createElement("a");
    const content = new Blob([response.data], { type: contentType });
    
    element.href = URL.createObjectURL(content);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  return [handleUrlInputChange, handleSlugInputChange, handleSubmit, handleDownload]
}

export default useSubmitNewLink;
