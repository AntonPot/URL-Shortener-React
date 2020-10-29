import axios from 'axios';

// TODO: finish .fetch and .submit methods. They should return expected responses

const remoteClient = {
  host: 'http://localhost:3001',
  uri: (path) => (remoteClient.host + path + '.json'),
  submit: async(path, requestOptions) => await axios
    .post(remoteClient.uri(path), requestOptions)
    .then((response) => response )
    .catch((response) => response.response) ,
  fetch: async(path, requestOptions = {}) => await axios
    .get(remoteClient.uri(path), requestOptions)
    .then((response) => response )
    .catch((response) => response.response ),
};

export default remoteClient;
