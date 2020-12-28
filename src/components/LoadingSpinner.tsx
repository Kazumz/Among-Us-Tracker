import React from 'react';
import Loader from 'react-loader-spinner';

import { GetLoading } from '../store/bundles/application-selectors';

interface ILoadingSpinnerProps {
    covering: () => JSX.Element;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
    covering
}) => {
    const loading = GetLoading();

    if (loading === true) {
        return (
            <div className='loading-spinner'>
                <Loader type="Rings" color="#8f3e8f" height="175" width="175" />
            </div>
        )
    }

    return covering();
}

export default LoadingSpinner;