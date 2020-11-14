import React from 'react';

export interface IComboBoxOption {
    label: string;
    disabled?: boolean;
    disabledLabel?: string;
}

interface IComboBoxProps {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string | number;
    options: ReadonlyMap<string | number, IComboBoxOption>;
}

const ComboBox: React.FC<IComboBoxProps> = ({
    onChange,
    value,
    options,
}) => {
    const parsedOptions = React.useMemo(
        () => renderOptions(options),
        [options],
    );

    return (
        <select
            id='combobox'
            name='combobox'
            onChange={onChange}
            value={value}
        >
            {parsedOptions}
        </select>
    );
};

function renderOptions(options: ReadonlyMap<string | number, IComboBoxOption>): ReadonlyArray<JSX.Element> {
    const elements: Array<JSX.Element> = [];
    options.forEach((value: IComboBoxOption, key: string | number) => {

        const label = value.disabled === true && value.disabledLabel ? value.disabledLabel : value.label;

        elements.push(
            <option
                key={key}
                value={key}
                disabled={value.disabled}
            >
                {label}
            </option>,
        );
    });

    return elements;
}

export default ComboBox;