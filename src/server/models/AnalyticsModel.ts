import DBHelper from '../utils/DBHelper'
import log4js from 'log4js';
const logger = log4js.getLogger('global');
const mongoose = DBHelper.connect();
const Schema = mongoose.Schema;

// 创建数据库
const analyticsSchema = new Schema({
    createTime: { type: Date, default: Date.now },
    name: String,
    age: Number
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

const analyticsModel = {
     add<T>(item: T):void {
        const analyticsModel = new Analytics(item);
        analyticsModel.save((err) => {
             logger.error(JSON.stringify(err));
        });  
    },
    find(query?:object) {
        return Analytics.find(query!, err => {
            if (err) {
               logger.error(JSON.stringify(err));
           }
       })
    }
    
}

export default analyticsModel;