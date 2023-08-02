import React from 'react'

const Button = ({ action, children, className , type}) => {
    return (
        <>
            <button className={className} onClick={action} type={type}>
                {children}
            </button>
        </>
    )
}

export default Button