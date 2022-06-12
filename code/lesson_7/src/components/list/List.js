import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './List.css';

const List = ({ items, editItem }) => { 

    return(
        <section className='list'>
            {
                items.map((item, index) => {
                    const { id, title } = item;
                    return( 
                        <div className='list-item' key={id}>
                            {title} id:  {id}
                            <div>
                                <button         
                                    className='edit-btn'
                                    onClick={() => editItem(id)}
                                ><FaEdit /></button>
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