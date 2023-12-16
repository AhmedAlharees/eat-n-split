/* eslint-disable react/prop-types */
import { useState } from 'react';
const AddFriend = ({ onNewFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSetNewFriend = (e) => {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    setName('');
    setImage('https://i.pravatar.cc/48');
    onNewFriend(newFriend);
  };

  return (
    <form onSubmit={handleSetNewFriend} className="form-add-friend">
      <label>👫Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼Image URL</label>
      <input
        type="text"
        value={'https://i.pravatar.cc/48'}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
};

export default AddFriend;
