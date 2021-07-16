import { Component } from 'react';

export default class Emoji extends Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addBracket: this.addBracket });
    }
}
