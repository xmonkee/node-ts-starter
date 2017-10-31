import * as express from 'express';

const router = express.Router();

router.post('/get-login-status', function(req: express.Request, res: express.Response) {
	res.send({loggedIn: !!req.cookies.accessToken});
});

export default router;
