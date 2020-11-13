import React from 'react';
import classnames from 'classnames';

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
    const buttonClassName = classnames('button', className);
    
    return (
        <button
            className={buttonClassName}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={onClick}
        >
            {content}
        </button>
    );
}

export default Button;