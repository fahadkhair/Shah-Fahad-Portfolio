import React, { useState } from 'react';

function List() {
  const [data, setData] = useState([]); // initial data
  const [editingIndex, setEditingIndex] = useState(null); // index of the item being edited
  const [newItem, setNewItem] = useState(''); // new item value for editing

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    const newData = [...data];
    newData[index] = newItem;
    setData(newData);
    setEditingIndex(null);
    setNewItem('');
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
        <form>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Add new item"
          className='form-input'
        />
        <button
          className="add-btn"
          onClick={(event) => {
            event.preventDefault();
            setData([...data, newItem]);
            setNewItem('');
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {data.map((value, index) => {
          return (
            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={newItem}
                  onChange={handleInputChange}
                  placeholder={value}
                  className='form-input'
                />
              ) : (
                value
              )}
              <button
                className="edit-btn"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
              {editingIndex === index && (
                <button
                  className="save-btn"
                  onClick={() => handleSave(index)}
                  style={{ marginLeft: '10px' }}
                >
                  Save
                </button>
              )}
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}

export default List;