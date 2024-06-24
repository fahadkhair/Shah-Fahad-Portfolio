import React, { useState } from 'react';

function List() {
  const [data, setData] = useState([]); // initial data
  const [editingIndex, setEditingIndex] = useState(null); // index of the item being edited
  const [newItem, setNewItem] = useState(''); // new item value for editing
  const [email, setEmail] = useState([]); // email data
  const [emailData, setEmailData] = useState(''); // new email value for editing
  const [combinedData, setCombinedData] = useState([]); // combined data

  const handleEmailChange = (event) => {
    setEmailData(event.target.value);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewItem(data[index]);
    setEmailData(email[index]);
  };

  const handleSave = (index) => {
    const newData = [...data];
    newData[index] = newItem;
    setData(newData);

    const newEmail = [...email];
    newEmail[index] = emailData;
    setEmail(newEmail);

    const newCombinedData = [...combinedData];
    newCombinedData[index] = { name: newItem, email: emailData };
    setCombinedData(newCombinedData);

    setEditingIndex(null);
    setNewItem('');
    setEmailData('');
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);

    const newEmail = [...email];
    newEmail.splice(index, 1);
    setEmail(newEmail);

    const newCombinedData = [...combinedData];
    newCombinedData.splice(index, 1);
    setCombinedData(newCombinedData);

    if (editingIndex === index) {
      setEditingIndex(null);
      setNewItem('');
      setEmailData('');
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();

    setData([...data, newItem]);
    setEmail([...email, emailData]);
    setCombinedData([...combinedData, { name: newItem, email: emailData }]);
    setNewItem('');
    setEmailData('');
  };

  return (
    <div className='container'>
      <form onSubmit={handleAdd} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter Your Name"
          className='form-input'
        />

        <input
          type="text"
          value={emailData}
          onChange={handleEmailChange}
          placeholder="Enter Your Email"
          className='form-input'
        />

        <button
          type="submit"
          className="add-btn"
        >
          Add
        </button>
      </form>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((value, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className='form-input'
                    style={{ width: '100%' }}
                  />
                ) : (
                  <span>{value.name}</span>
                )}
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={emailData}
                    onChange={handleEmailChange}
                    className='form-input'
                    style={{ width: '100%' }}
                  />
                ) : (
                  <span>{value.email}</span>
                )}
              </td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                {editingIndex === index ? (
                  <>
                    <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                    <button className="delete-btn" onClick={() => handleDelete(index)} style={{ marginLeft: '5px' }}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(index)} style={{ marginLeft: '5px' }}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
