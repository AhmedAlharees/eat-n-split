/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';
import AddFriend from './AddFriend';
import FriendList from './FriendsList';
import SplitTheBill from './SplitTheBill';

export default function App() {
  const [friends, setNewFriend] = useState([...initialFriends]);
  const [showAddFrined, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectedFriend = (selected) => {
    selectedFriend ? setSelectedFriend(null) : setSelectedFriend(selected);
    setShowAddFriend(false);
  };
  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFrined) => !showAddFrined);
    setSelectedFriend(null);
  };

  const handleNewFriend = (newlyAddedFriend) => {
    setNewFriend((friends) => [...friends, newlyAddedFriend]);
  };

  const handleSplitBill = (value) => {
    setNewFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          nowSelected={selectedFriend}
        />
        {showAddFrined && <AddFriend onNewFriend={handleNewFriend} />}
        <Button
          text={showAddFrined ? 'Close' : 'Add Friend'}
          onShowFriend={handleShowAddFriend}
        />
      </div>
      {selectedFriend && (
        <SplitTheBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

const Button = ({ text, onShowFriend }) => {
  return (
    <button className="button" onClick={onShowFriend}>
      {text}
    </button>
  );
};

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];
