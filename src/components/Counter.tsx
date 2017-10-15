import axios from 'axios';
import * as React from 'react';
import models from './../models';

interface IState  { serverCount: number; browserCount: number; }
export default class Counter extends React.Component<{}, IState> {

	constructor() {
		super();
		this.state = { serverCount: 0, browserCount: 0 };
	}

	public render() {
		return (
			<ul>
				<li>
					Browser Value {this.state.browserCount}
					<button onClick={() => this._incBrowserCount()}>Inc Browser Count</button>
				</li>
				<li>
					Sever Value {this.state.serverCount}
					<button onClick={() => this._incServerCount()}>Inc Server Count</button>
				</li>
			</ul>
		);
	}

	public componentDidMount() {
		this._getServerCount();
	}

	private async _getServerCount() {
		const response = await axios.get('/api/counter');
		this.setState(
			(state) => ({ ...state, serverCount: response.data.count }),
		);
	}

	private async _incServerCount() {
		const response = await axios.post('/api/counter');
		this.setState(
			(state) => ({ ...state, serverCount: response.data.count }),
		);
	}

	private _incBrowserCount() {
		models.counter.inc();
		this.setState(
			(state) => ({ ...state, browserCount: models.counter.get() }),
		);
	}
}
