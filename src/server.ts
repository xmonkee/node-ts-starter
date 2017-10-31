import * as express from 'express';

import api from './api';

const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('dist'));
app.use('/api', api);

app.listen(80, function() {
	console.log('Listening');
});
