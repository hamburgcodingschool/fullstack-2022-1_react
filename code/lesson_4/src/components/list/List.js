import React, { useState } from 'react';
import ListItem from './ListItem';
import data from '../../data.json';
// import data2 from '../../data2.json';

// List component will be a parent component which provides exactly value to our child compoonent

// In our example to provide exactly place of getting the information from - data (data.json)

// P.S. data can be named in another way as well, it depends on you how you want to name it and what kind of information you have inside of it, always nice to have word "data"

const List = () => {

  const [listData, setListData] = useState(data);
  const [FilteredlistData, setFilteredListData] = useState(data);

  // const [secondListData, setSecondListData] = useState(data);
  // console.log(listData)

  // if (listData.length) {
  //   console.log('if condition is true ') 
  // } else {
  //   console.log('else ')
  // }

  return (
    <main className="list">
      <section>

        {
          listData.length === 0 ? 
          <h3>You finished all your tasks</h3>
          : 
          <h2> 
            {listData.length} things to do during the week
          </h2>
        }

          <ListItem listItems={listData} />
          <button onClick={() => setListData([])}>Clear all</button>
      </section>

      {/* <section>
        <h2>0 things to do during the week</h2>
          <ListItem listItems={secondListData} />
        {/* <button onClick={() => console.log('You clicked')}>Clear all</button> 
      </section> */}

    </main>
  );
}

export default List;
