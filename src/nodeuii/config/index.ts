const mongoDBHost =
  process.env.BUILD_ENV === 'docker'
    ? 'mongodb://database/test'
    : 'mongodb://localhost/test';

export default {
  spiderDomain: 'http://zw.cdzj.chengdu.gov.cn',
  serverPort: 8082,
  databaseUrl: mongoDBHost,
};
