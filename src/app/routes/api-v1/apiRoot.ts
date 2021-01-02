import { NextFunction, Request, Response, Router } from "express";

export class ApiV1RootRouter {
    router: Router
    
    constructor() {
        this.router = Router();
        this.init();
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