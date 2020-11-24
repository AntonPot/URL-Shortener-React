import axios from 'axios';

const remoteClient = {
  host: 'http://localhost:3001',
  uri: (path) => (remoteClient.host + path + '.json'),
  post: async(path, requestPayload) => await axios({
    method: 'post',
    url: remoteClient.uri(path),
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: requestPayload
  }).then((response) => response).catch((error) => error.response),
  get: async(path) => await axios({
    method: 'get',
    url: remoteClient.uri(path),
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }).then((response) => response).catch((error) => error.response),
  delete: async(path) => await axios({
    method: 'delete',
    url: remoteClient.uri(path),
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }).then((response) => response).catch((error) => error.response),
};

export default remoteClient;
