import axios from 'axios';

// TODO: finish .fetch and .submit methods. They should return expected responses

const remoteClient = {
  host: 'http://localhost:3001',
  uri: (path) => (remoteClient.host + path + '.json'),
  submit: async(path, requestPayload) => await axios({
    method: 'post',
    url: remoteClient.uri(path),
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: requestPayload
  }).then((response) => response )
    .catch((response) => response.response),
  fetch: async(path, requestPayload = {}) => await axios({
    method: 'get',
    url: remoteClient.uri(path),
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }).then((response) => response )
    .catch((response) => response.response),
  delete: async(path, requestPayload = {}) => await axios({
    method: 'delete',
    url: remoteClient.uri(path),
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }).then((response) => response)
    .catch((response) => response.response),
};

export default remoteClient;
