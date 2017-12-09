import { connect } from 'react-redux';

import { inputChanged } from '../../actions/ui.actions';
import { appLoaded } from '../../actions/app.actions';

import React from 'react';
import PropTypes from 'prop-types';

import ResultsList from '../../components/ResultsList';
import InputGroup from '../../components/InputGroup';

import './style.scss';

export function Calculator({ history, onAppLoad, ...inputProps }) {
    return <div className="calculator-outer">
        <ResultsList history={history} onLoad={onAppLoad} />
        <InputGroup {...inputProps} />
    </div>;
}

Calculator.propTypes = {
    value: PropTypes.string.isRequired,
    history: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onAppLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    value: state.input,
    history: state.history,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(inputChanged(evt.target.value)),
    onAppLoad: () => dispatch(appLoaded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

