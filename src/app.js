import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import radioRouting from './routes/radio.routing'
const app = express();
const port = process.env.PORT || 3000;
import db from './database/databaseConnection';

class App{
  constructor(){
    
    db.on('dbConnected', ()=>{})

    this.app = express();
  
    this.app.use(cors());
    this.app.use(bodyParser.json({limit: '50mb'}) ); // to support JSON-encoded bodies
    this.app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
      extended: true,
      limit: '50mb'
    }));
    this.app.get('/', function(req, res) {
      res.status(200).send('We are up and running');
    });

    this.app.use('/radios', radioRouting);
  }
}

export default App;
