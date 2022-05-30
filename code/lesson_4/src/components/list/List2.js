import React, { useState } from 'react';
import ListItem from './ListItem';
import data2 from '../../data2.json';


const List2 = () => {

    return(
        <>
            Second page
            <ListItem listItems={data2} />

        </>
    )
}

export default List2;