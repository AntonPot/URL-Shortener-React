import axios from 'axios';

const caller = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
})
caller.defaults.headers.post['Content-Type'] = 'application/json'

const remoteClient = {
  post: async(path, requestPayload) => await caller({
    method: 'post',
    url: path,
    data: requestPayload
  }).then((response) => response).catch((error) => error.response),
  get: async(path) => await caller({
    method: 'get',
    url: path,
  }).then((response) => response).catch((error) => error.response),
  delete: async(path) => await caller({
    method: 'delete',
    url: path,
  }).then((response) => response).catch((error) => error.response),
};

export default remoteClient;
