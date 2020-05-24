import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import App from './App';
import './index.css';

interface CounterProps {
    message: string;
};

interface CounterState {
    count: number;
};

class Counter extends React.Component<CounterProps, CounterState> {
    state: CounterState = {count: 0};

    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'),
);
