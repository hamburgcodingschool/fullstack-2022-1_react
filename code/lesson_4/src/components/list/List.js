import React from 'react';
import ListItem from './ListItem';

const List = () => {
  return (
    <main className="list">
      <section>
        <h2>0 things to do during the week</h2>
          <ListItem />
        <button onClick={() => console.log('You clicked')}>Clear all</button>
      </section>
    </main>
  );
}

export default List;
