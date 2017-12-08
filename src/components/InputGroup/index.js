import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ResultPreview from '../../containers/ResultPreview';

import './style.scss';

export default function InputGroup({ onChange, onLoad, error, value }) {
    const inputClasses = classNames({
        'calculator-input': true,
        error
    });

    const onKeyPress = evt => {
        if (evt.key === 'Enter') {
            onLoad();
        }
    };

    return <div className="input-group-outer">
        <ResultPreview />
        <span className="input-outer">
            <label>{'Input an infix expression here:'}</label>
            <input className={inputClasses} value={value} onChange={onChange} onKeyPress={onKeyPress} />
        </span>
        <button className="calculator-submit-button" onClick={onLoad}>{'Load'}</button>
    </div>;
}

InputGroup.propTypes = {
    onChange: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
};

