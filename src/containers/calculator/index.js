import { connect } from 'react-redux';

import { inputChanged, resultLoaded } from '../../actions/ui.actions';

import React from 'react';
import PropTypes from 'prop-types';

import ResultsList from '../../components/ResultsList';
import InputGroup from '../../components/InputGroup';

import './style.scss';

export function Calculator({ input, history, result, error, onChange, onLoad }) {
    return <div className="calculator-outer">
        <ResultsList history={history} />
        <InputGroup onChange={onChange} onLoad={onLoad}
            error={error} value={input} result={result}
        />
    </div>;
}

Calculator.propTypes = {
    input: PropTypes.string.isRequired,
    history: PropTypes.array.isRequired,
    result: PropTypes.number,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    input: state.input,
    history: state.history,
    result: state.result,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(inputChanged(evt.target.value)),
    onLoad: () => dispatch(resultLoaded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

