import React from 'react';

interface IComboBoxProps {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string | number;
    options: ReadonlyMap<string | number, string>;
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

function renderOptions(options: ReadonlyMap<string | number, string>): ReadonlyArray<JSX.Element> {
    const elements: Array<JSX.Element> = [];
    options.forEach((value: string, key: string | number) => {
        elements.push(
            <option
                key={key}
                value={key}
            >
                {value}
            </option>,
        );
    });

    return elements;
}

export default ComboBox;