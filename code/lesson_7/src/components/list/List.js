import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './List.css';

const List = ({ items }) => { 

    return(
        <section className='list'>
            {
                items.map((item) => {
                    const { id, title } = item;
                    return( 
                        <div className='list-item' key={id}>
                            {title}
                            <div>
                                <button         
                                    className='edit-btn'><FaEdit /></button>
                                <button className='remove-btn'><FaTrashAlt /></button>
                            </div>
                        </div>
                    )
                })
            }
            
        </section>
    )
}


export default List;