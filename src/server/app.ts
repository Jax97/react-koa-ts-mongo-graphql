import Koa from 'koa';
// import serve from 'koa-static';
import log4js from 'log4js';
import koaBody from 'koa-body';
import config from './config';
import controller from './controllers';
import AccessHandler from './middleware/AccessHandler';

// log4js.configure({
//     appenders: {
//         access: {
//             type: 'file',
//             filename: './logs/global.log',
//         }
//     },
//     categories: {
//         default: {
//             appenders: ['global'],
//             level: 'info'
//         }
//     }
// })

// log4js.getLogger('global');
const loggerConfig = {
  appenders: {
    global: {
      type: 'file',
      filename: './logs/global',
      pattern: '-yyyy-MM-dd.log',
    },
  },
  categories: {
    default: {
      appenders: ['global'],
      level: 'info',
    },
  },
};
log4js.configure(loggerConfig);
const app = new Koa();

AccessHandler.init(app);
controller.init(app);
app.use(koaBody());
// app.use(serve('client'));

app.listen(config.serverPort);
console.log(`server is running at http://localhost:${config.serverPort}`);
