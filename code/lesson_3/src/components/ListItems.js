import React from 'react';
import data from '../data.json';
import ListItem from './ListItem';

const ListItems = () => {

    const arr = [10, 10, 20];

    console.log(data[1].first);

    // ListItem is a child component of ListItems, but it can be a child component for the different components. Because in ListItem component we have a template, which can be reused in different ways. 

    // We need to provide props to our child components and provide the whole information to them in a parent component as the arguments. 
  return (
    <ul className="list-items">
      {
        
        data.map(listdataItem => {
            return (
                <ListItem
                    key={listdataItem.id}
                    id={listdataItem.id}
                    image={listdataItem.img}
                    title={listdataItem.task}
                    url={listdataItem.image}
                    x={listdataItem.steps.first}
                />
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