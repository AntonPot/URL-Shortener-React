import { useState } from 'react';
import remoteClient from '../../../utils/remote-client';

const useClickHandler = (link, handleDelete) => {
  const [accessCount, setAccessCount] = useState(link.access_count);
  const [countriesCount, setCountriesCount] = useState(link.countries_count);
  const slug = link.short_url.split('/').pop();

  const handleDeleteClick = () => {
    handleDelete(link);
    remoteClient.delete(`/links/${link.id}`)
  };

  const handleLinkClick = async () => {
    const resp = await remoteClient.get(`/${slug}`);

    setAccessCount(accessCount + 1);
    setCountriesCount(resp.data.countries_count);
  };

  return { accessCount, countriesCount, slug, handleDeleteClick, handleLinkClick };
};

export default useClickHandler;
