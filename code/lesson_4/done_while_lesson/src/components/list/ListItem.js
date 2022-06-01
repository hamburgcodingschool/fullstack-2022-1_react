import React from 'react';

const ListItem = ({ listItems, onRemove }) => { 
  return (
    <ul>
    {
      listItems.map(listItem => {
        return (
            <li name={listItem.id} className="list" key={listItem.id}>
                <img src={listItem.img} alt={listItem.task} />
                <p>
                    {listItem.task}
                </p>
                <button type="button" className='remove-btn' onClick={() => onRemove(listItem.id)}>Remove</button>
            </li>
        )
      })
    }
    </ul>
  );
}

export default ListItem;
