import React, { useState } from 'react';

function List() {
  const [data, setData] = useState([]); // initial data
  const [editingIndex, setEditingIndex] = useState(null); // index of the item being edited
  const [newItem, setNewItem] = useState(''); // new item value for editing
  const [email, setEmail] = useState([]); // email data
  const [emailData, setEmailData] = useState(''); // new email value for editing
  const [link, setLink] = useState([]); // link data
  const [linkData, setLinkData] = useState(''); // new link value for editing
  const [password, setPassword] = useState([]); // password data
  const [newPass, setNewPass] = useState(''); // new password value for editing
  const [combinedData, setCombinedData] = useState([]); // combined data

  const handleEmailChange = (event) => {
    setEmailData(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLinkData(event.target.value);
  };

  const handlePassChange = (event) => {
    setNewPass(event.target.value);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewItem(data[index]);
    setEmailData(email[index]);
    setLinkData(link[index]);
    setNewPass(password[index]);
  };

  const handleSave = (index) => {
    const newData = [...data];
    newData[index] = newItem;
    setData(newData);

    const newEmail = [...email];
    newEmail[index] = emailData;
    setEmail(newEmail);

    const newLink = [...link];
    newLink[index] = linkData;
    setLink(newLink);

    const newPassword = [...password];
    newPassword[index] = newPass;
    setPassword(newPassword);

    const newCombinedData = [...combinedData];
    newCombinedData[index] = { name: newItem, email: emailData, link: linkData, password: newPass };
    setCombinedData(newCombinedData);

    setEditingIndex(null);
    setNewItem('');
    setEmailData('');
    setLinkData('');
    setNewPass('');
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);

    const newLink = [...link];
    newLink.splice(index, 1);
    setLink(newLink);

    const newEmail = [...email];
    newEmail.splice(index, 1);
    setEmail(newEmail);

    const newPassword = [...password];
    newPassword.splice(index, 1);
    setPassword(newPassword);

    const newCombinedData = [...combinedData];
    newCombinedData.splice(index, 1);
    setCombinedData(newCombinedData);

    if (editingIndex === index) {
      setEditingIndex(null);
      setNewItem('');
      setEmailData('');
      setLinkData('');
      setNewPass('');
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();

    setData([...data, newItem]);
    setEmail([...email, emailData]);
    setLink([...link, linkData]);
    setPassword([...password, newPass]);
    setCombinedData([...combinedData, { name: newItem, email: emailData, link: linkData, password: newPass }]);
    setNewItem('');
    setEmailData('');
    setLinkData('');
    setNewPass('');
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

        <input
          type="text"
          value={linkData}
          onChange={handleLinkChange}
          placeholder="Enter Your Link"
          className='form-input'
        />

        <input
          type="text"
          value={newPass}
          onChange={handlePassChange}
          placeholder="Enter Your Password"
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
            <th style={{ padding: '10px', textAlign: 'left' }}>Link</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Password</th>
            <th style={{ padding: '5px', textAlign: 'center' }}>Actions</th>
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
              <td style={{ padding: '10px', textAlign: 'left' }}>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={linkData}
                    onChange={handleLinkChange}
                    className='form-input'
                    style={{ width: '100%' }}
                  />
                ) : (
                  <span>{value.link}</span>
                )}
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                {editingIndex === index ? (
                  <input
                    type="password"
                    value={newPass}
                    onChange={handlePassChange}
                    className='form-input'
                    style={{ width: '100%' }}
                  />
                ) : (
                  <span>{value.password}</span>
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