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
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD'
                        ? 'Change the Clock to Bangla'
                        : 'Change the clock to English'}
                </button>
                {show && <p>Hello</p>}
            </div>
        );
    }
}
