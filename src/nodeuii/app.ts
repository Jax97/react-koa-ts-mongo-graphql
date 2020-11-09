const Koa = require('koa');
const serve = require('koa-static');// 处理静态资源文件
const koaBody = require('koa-body');
const log4js = require('log4js');

// import Koa from 'koa';
// import serve from 'koa-static';
// import log4js from 'log4js';
// import koaBody from 'koa-body';
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug('Some debug msg');

import config from './config';
const app = new Koa();
app.use(koaBody());

app.use(serve('client'));

console.log(`server is running at http://localhost:${config.serverPort}`)