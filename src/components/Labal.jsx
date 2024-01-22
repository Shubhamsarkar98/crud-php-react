import React from 'react'

const Labal = ({htmlFor,labalName}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="form-label">
                {labalName}
            </label>
        </div>
    )
}

export default Labal