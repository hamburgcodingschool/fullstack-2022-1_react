import React from 'react';
import data from '../data.json';

const ListItems = () => {

    const arr = [10, 10, 20 ]

  return (
    <ul className="list-items">
      {
        
        data.map(listItem => {
            return (
                <li id={listItem.id} key={listItem.id}> {listItem.task}</li>
            )
        })

        // arr.map(arrItem => {
        //     return (
        //         <p>{arrItem}</p>
        //     )
        // })
         // console.log(data) 
      }
    </ul>
  );
}

export default ListItems;