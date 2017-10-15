import * as path from 'path';
import * as express from 'express';
import api from './src/api';

const app = express()
const root = path.resolve(__dirname, 'dist');

app.use(express.static('dist'));
app.use('/api', api);

app.listen(3000, function() {
	console.log('Listening');
});