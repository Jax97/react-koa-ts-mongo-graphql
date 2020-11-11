import mongoose from 'mongoose';
import config from '../config/index';

const DBHelper = {
    connect(): mongoose.Mongoose {
        mongoose.connect(config.databaseUrl)
        return mongoose;
    }
}