import React, { useState } from 'react';
import ListItem from './ListItem';
import data from '../../data.json';

const List = () => {

  const [listData, setListData] = useState(data);

  const handleRemove = (id) => {
    const newList = listData.filter((item) => item.id !== id);

    setListData(newList);
    console.log(id);
  }

  return (
    <main className="list">
      {listData.length === 0 ? 
        <section>
          <h2>You finished all tasks </h2>
        </section>
        : 
        <section>
          <h2>{listData.length} things to do during the week</h2>
            <ListItem 
              listItems={listData} 
              onRemove={handleRemove}
            />
          <button 
            onClick={() => setListData([])}
          >Clear all</button>
        </section>
      }
    </main>
  );
}

export default List;
