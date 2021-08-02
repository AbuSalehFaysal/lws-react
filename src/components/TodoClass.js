import React, { Component } from 'react';

export default class TodoClass extends Component {
    state = {
        todo: '',
        warning: null,
    };

    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'JavaScript' : null;

        this.setState({
            todo: inputValue,
            warning,
        });
    };

    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea
                        name="todo"
                        value={todo}
                        onChange={this.handleInput}
                        id=""
                        cols="30"
                        rows="10"
                    />
                </p>
                <hr />
                <h2>{warning || 'Good Choice!'}</h2>
            </div>
        );
    }
}
