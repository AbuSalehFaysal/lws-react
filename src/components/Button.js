import React, { Component } from 'react';

export default class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button componenet rendered');
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Click here
            </button>
        );
    }
}
