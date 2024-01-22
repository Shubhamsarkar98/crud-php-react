import React from 'react';

const Select = ({ options, value, onChange }) => {
    console.log(value)
    return (
        <>
            <select
                name='status'
                className='form-control'
                value={value == "Select your Status" ? 'null' : value}
                onChange={onChange}
            >
                {Object.keys(options).map((key) => (
                    <option key={options[key]} value={options[key]}>
                        {options[key]}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
