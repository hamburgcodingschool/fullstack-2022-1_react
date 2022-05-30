import React from 'react';

// props = properties

// state

// ListItem is a child component, which we are using for creating a template for our project, and can be used in several ways, with different data of information

// filter()

const ListItem = ({ listItems, onRemove }) => {
  return (
    <ul>
      {
        listItems.map(listItem => {
          return (
            <li className="list" key={listItem.id}>
              <img src={listItem.img} alt={listItem.task} />
              <p>
                {listItem.task}
              </p>
              <button onClick={() => onRemove(listItem.id)}>Remove</button>
            </li>
          )
        })
      }
    </ul>
  );
}

export default ListItem;
