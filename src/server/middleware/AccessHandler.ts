import log4js from 'log4js';
import Koa from 'koa';
// const logger2 = log4js.getLogger('global');
// logger2.info('logger2: info')
// console.log('logger2: ', logger2);

// logger放在init函数外面不生效，需放在函数里，为何？
const AccessHandler = {
    init(app: Koa): void {
        const config = {
            appenders: {
                access: {
                    type: 'file',
                    filename: './logs/access',
                    pattern: '-yyyy-MM-dd.log'
                }
            },
            categories: {
                default: {
                    appenders: ['access'],
                    level: 'info'
                }
            }
        }

        log4js.configure(config);
        const logger = log4js.getLogger("access");

        app.use(async (ctx: Koa.Context, next: Function) => {
            const { request } = ctx;
            // let str = `${JSON.stringify(ctx.request)}`;
            let str = `method: ${request.method},url: ${request.url},host: ${request.header.host},user-agent: ${request.header['user-agent']},cookie: ${request.header.cookie}`;
            logger.info(str);
            await next();
        })
    }
}



export default AccessHandler;