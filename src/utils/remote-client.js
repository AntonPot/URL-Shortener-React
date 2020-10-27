const remoteClient = {
  host: 'http://localhost:3001',
  uri: (path) => (remoteClient.host + path + '.json'),
};

export default remoteClient;
