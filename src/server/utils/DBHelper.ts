import mongoose from 'mongoose';
import config from '../config/index';

const options = {
    // reconnectInterval: 1000,
    // reconnectTries: 30,
    // poolSize: 10,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
}

const DBHelper = {
    connect(): mongoose.Mongoose {
        mongoose.connect(config.databaseUrl, options);
        const db = mongoose.connection;

        db.once('error', () => {
            console.error('数据库连接失败');
        })
        return mongoose;
    }
}

export default DBHelper;