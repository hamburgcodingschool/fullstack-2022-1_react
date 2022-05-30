import React from 'react';

const ListItem = ({ id, image, title, url, x }) => {
    // 1. You need check if steps.first is failed
    // 2. Background of the row should red
    // 3. It should green 

    if(id > 3) {

    } else {

    }
  return (
    <li className='item' id={id} key={id}
        style={{
            textAlign: x.first === "failed" ? 'center' : 'right'
        }}
    > 
        <img src={image} alt='' />
            {title}
        <a href={url} >Link image</a>
    </li>

  );
}

export default ListItem;