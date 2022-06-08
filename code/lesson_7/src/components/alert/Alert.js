import React, { useEffect } from 'react';

const Alert = ({ msg, bgColor, removeAlert }) => { 

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout);
    }, [])

    return(
        <section className='alert' style={{
            backgroundColor: bgColor
        }}>
            {msg}
        </section>
    )
}


export default Alert;