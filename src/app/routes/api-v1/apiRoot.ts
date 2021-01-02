import { NextFunction, Request, Response, Router } from "express";
import morgan, { Morgan } from "morgan";

export class ApiV1RootRouter {
    router: Router
    
    constructor() {
        this.router = Router();
        this.middleware();
        this.init();
    }
    middleware() {
        this.router.use(morgan('tiny'));
    }

    init() {
        this.router.get('/', this.getHome);
    }

    getHome = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send({ status: 'Success', message: ' application is running.'});
    }
}

const apiRootRouter = new ApiV1RootRouter();

export default apiRootRouter.router;