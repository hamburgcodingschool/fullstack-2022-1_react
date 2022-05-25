import React from 'react';

const ListItem = ({ listItem }) => {
  return (
    <li className="list-item">
      {listItem.task}
    </li>
  );
}

export default ListItem;