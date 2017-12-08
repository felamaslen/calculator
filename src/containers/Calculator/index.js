import { connect } from 'react-redux';

import { inputChanged, resultLoaded } from '../../actions/ui.actions';

import React from 'react';
import PropTypes from 'prop-types';

import ResultsList from '../../components/ResultsList';
import InputGroup from '../../components/InputGroup';

import './style.scss';

export function Calculator({ history, ...inputProps }) {
    return <div className="calculator-outer">
        <ResultsList history={history} />
        <InputGroup {...inputProps} />
    </div>;
}

Calculator.propTypes = {
    value: PropTypes.string.isRequired,
    history: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    value: state.input,
    history: state.history,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(inputChanged(evt.target.value)),
    onLoad: () => dispatch(resultLoaded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

