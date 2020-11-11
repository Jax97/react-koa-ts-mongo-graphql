import Router from 'koa-router';
import Koa from 'koa';

const router = new Router();

router.get('/', (ctx: Koa.Context) => {
    ctx.body = '首页';
})

export default {
    init(app: Koa): void {
        app.use(router.routes()).use(router.allowedMethods());
    }
};
