import React from 'react';
import classnames from 'classnames';

import { GetLoading } from '../store/bundles/application-selectors';

interface IButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    content?: string | JSX.Element;
}

const Button: React.FC<IButtonProps> = ({
    className,
    disabled,
    onClick,
    content,
}) => {
    const loading = GetLoading();
    
    const buttonClassName = classnames('button', className);
    
    return (
        <button
            className={buttonClassName}
            disabled={disabled || loading}
            aria-disabled={disabled}
            onClick={onClick}
        >
            {content}
        </button>
    );
}

export default Button;