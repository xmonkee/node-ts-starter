import * as express from 'express';
import models from './../models';

const router = express.Router();
const counter = 

router.get('/counter', function (req: express.Request, res:express.Response) {
    const count = models.counter.get();
    res.json({count});
});

router.post('/counter', function (req: express.Request, res:express.Response) {
    const count = models.counter.inc();
    res.json({count: models.counter.get()});
});

export default router;
