import * as path from 'path';
import * as express from 'express';
import Models from './src/lib/Models';

const app = express()
const root = path.resolve(__dirname, 'dist');

app.use(express.static('dist'))

app.get('/', function (req: express.Request, res:express.Response) {
    res.sendFile('index.html', {root})
});

app.get('/api/counter', function (req: express.Request, res:express.Response) {
    const count = Models.counter.get();
    res.json({count});
});

app.post('/api/counter', function (req: express.Request, res:express.Response) {
    const count = Models.counter.inc();
    res.json({count: Models.counter.get()});
});

app.listen(3000, function() {
	console.log('Listening');
});