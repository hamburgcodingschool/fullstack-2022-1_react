import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({ msg, bgColor, removeAlert, list }) => { 

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout);
    }, [list]);

    return(
        <section className='alert' style={{
            backgroundColor: bgColor
        }}>
            {msg}
        </section>
    )
}


export default Alert;