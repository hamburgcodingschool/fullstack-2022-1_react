import React, { useState } from 'react';
import List from './components/list/List';
import Alert from './components/alert/Alert';

const App = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    bgColor: ''
  });

  // in mostly cases you will read 'e'
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Hello');

    if(!name) {
      showAlert(true, 'PLease enter value', 'tomato');
    } else if (name && isEditing) {
      showAlert(true, 'Edited successfully ', 'tomato');
    } else {
      showAlert(true, 'Item is added', 'tomato');

      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }

      setList([...list, newItem]);
      setName('');
    }
    // Add item


    // Edit item
  }


  // Fucntion for setting information for alert
  const showAlert = (show = false, msg ='', bgColor = '' ) => {
    setAlert({
      show, msg,bgColor
    })
  }

  return (
    <div className="app">
      {
        alert.show && <Alert {...alert} removeAlert={showAlert} /> 
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
        />
        <button 
          className='btn-clear'
          onClick={() => console.log('Clear Items')}
        >
          Clear items
        </button>

      </section>
    </div>
  );
}

export default App;
