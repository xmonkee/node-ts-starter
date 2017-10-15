import * as express from 'express';
import Models from './../lib/Models';

const router = express.Router();

router.get('/counter', function (req: express.Request, res:express.Response) {
    const count = Models.counter.get();
    res.json({count});
});

router.post('/counter', function (req: express.Request, res:express.Response) {
    const count = Models.counter.inc();
    res.json({count: Models.counter.get()});
});

export default router;
