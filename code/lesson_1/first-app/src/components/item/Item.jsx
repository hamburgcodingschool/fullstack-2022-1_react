import React from 'react';

const Item = ({ image, date, title, text }) => {
    return (
        <section>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p className='date'>{date}</p>
                <h3 className='title'>{title}</h3>
                <p className='text'>{text}</p>
            </div>
        </section>
    )
}

export default Item;