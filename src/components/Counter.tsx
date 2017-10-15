import * as React from 'react';
import Models from './../lib/Models';
import axios from 'axios';

type Props = {};
type State = { serverCount: number, browserCount: number };
export default class Counter extends React.Component<Props, State> {

    constructor() {
        super();
        this.state = { serverCount: 0, browserCount: 0 };
    }

    componentDidMount() {
        this._getServerCount();
    }

    async _getServerCount() {
        const response = await axios.get('/api/counter');
        this.setState(
            (state) => ({ ...state, serverCount: response.data.count })
        );
    }

    async _incServerCount() {
        const response = await axios.post('/api/counter');
        this.setState(
            (state) => ({ ...state, serverCount: response.data.count })
        );
    }

    _incBrowserCount() {
        Models.counter.inc();
        this.setState(
            (state) => ({ ...state, browserCount: Models.counter.get() })
        );
    }

    render() {
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
}
