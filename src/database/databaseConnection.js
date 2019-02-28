import config from './config';
import mongoose from 'mongoose';
const EventEmitter = require('events');
class DbConnection extends EventEmitter {

  constructor() {
    super();
    this._connect();
    this.isConnected = false;
  }
  _connect() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(config.mongoURI, {
      useNewUrlParser: true
    }, (err, db) => {
      if (err) throw err;
      this.isConnected = true;
      this.emit('dbConnected');
    });
  }
}
const db = new DbConnection();
export default db;