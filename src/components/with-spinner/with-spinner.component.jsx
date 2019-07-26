import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';
import React from 'react'

const withSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )};
    return Spinner;
};

export default withSpinner;