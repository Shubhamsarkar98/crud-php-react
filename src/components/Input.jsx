import React from 'react'

const Input = ({ type, placeholder, id, onChange, value }) => {

    return (
        <div>

            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                id={id}
                onChange={onChange}
                value={value}
                aria-describedby="emailHelp"
            />
        </div>
    )
}

export default Input