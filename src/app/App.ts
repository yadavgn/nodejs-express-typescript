import express from 'express';
import * as bodyParser from 'body-parser'
import ApiV1RootRouter from './routes/api-v1/apiRoot';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        // this.express.use(logger())
        this.express.use(bodyParser.json({limit:'200mb'}));
    }

    routes() {
        this.express.use('/api/v1/', ApiV1RootRouter);
    }
}

export default new App().express;