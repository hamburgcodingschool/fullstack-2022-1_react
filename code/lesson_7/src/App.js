import React, { useEffect, useState } from 'react';
import List from './components/list/List';
import Alert from './components/alert/Alert';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');

  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const App = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    bgColor: ''
  });

  // .find()

  // in mostly cases you will read 'e'
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Hello');

    if(!name) {
      showAlert(true, 'PLease enter value', 'tomato');
    } else if (name && isEditing) {
      // Edit item
      setList(list.map((item) => {
        if(item.id === editID) {
          return {...item, title: name}
        }
        return item;
      }))
      setName('')
      setIsEditing(false);
      setEditID(null);
      showAlert(true, 'Edited successfully ', 'tomato');

    } else {
      // Add item
      showAlert(true, 'Item is added', 'tomato');

      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }

      setList([...list, newItem]);
      setName('');
    }
  }

  // Function for setting information for alert
  const showAlert = (show = false, msg ='', bgColor = '' ) => {
    setAlert({
      show, msg,bgColor
    })
  }

  const editItem = (id) => {
    // getting the specific item
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setName(specificItem.title);
    setEditID(id)
    console.log('ok');
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className="app">
      {
        alert.show && <Alert {...alert} removeAlert={showAlert} list={list} /> 
      }
      
      <h1>Grocery Application</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <input 
          className='field'
          type='text' 
          placeholder='Enter a word' 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='btn'>{isEditing ? 'Edit' : 'Submit'}</button>
      </form>

      <section className='container'>
        <List 
          items={list} 
          editItem={editItem}
        />
        <button 
          className='btn-clear'
          onClick={() => console.log('Clear Items')}
        >
          Clear items
        </button>

      </section>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82917.52971007644!2d8.432035759482352!3d49.50013064650311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc24518e3f45%3A0xb1e4fe7aa406e687!2sMannheim!5e0!3m2!1sen!2sde!4v1654713917960!5m2!1sen!2sde" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
}

export default App;
