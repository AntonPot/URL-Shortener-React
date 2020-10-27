import axios from 'axios';

// TODO: finish .fetch and .submit methods. They should return expected responses

const remoteClient = {
  host: 'http://localhost:3001',
  uri: (path) => (remoteClient.host + path + '.json'),
  submit: async(path, requestOptions) => await axios
    .post(remoteClient.uri(path), requestOptions)
    .then((response) => {
      console.log(response.data);
      return response
    })
    .catch((response) => {
      console.log(response);
      return response.response
    }),
  fetch: async(path, requestOptions) => await axios
    .get(remoteClient.uri(path), requestOptions)
    .then(function (response) {
      console.log(response.response.data)
    }),
};

export default remoteClient;
