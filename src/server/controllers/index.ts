import Router from 'koa-router';
import Koa from 'koa';
import analyticsModel from '../models/analyticsModel';
import mongoose from 'mongoose';

const router = new Router();

router.get('/', (ctx: Koa.Context) => {
    ctx.body = '首页';
})

router.get('/add', (ctx: Koa.Context) => {
    analyticsModel.add({  name: 'hjx', age: 18 });
    ctx.body = '增加数据';
})

router.get('/find', async (ctx: Koa.Context) => {
    let resData:mongoose.Document[];
  await  analyticsModel.find({ name: 'hjx' }).then(res => {
        resData = res;
    })
    ctx.body = resData;
})
export default {
    init(app: Koa): void {
        app.use(router.routes()).use(router.allowedMethods());
    }
};
