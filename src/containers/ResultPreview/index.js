import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

function ResultPreview({ result }) {
    if (result === null) {
        return null;
    }

    return <div className="result-preview">
        <span className="before">{'Result: '}</span>
        <span className="result">{result}</span>
    </div>;
}

ResultPreview.propTypes = {
    result: PropTypes.number
};

const mapStateToProps = ({ result }) => ({ result });

export default connect(mapStateToProps)(ResultPreview);

