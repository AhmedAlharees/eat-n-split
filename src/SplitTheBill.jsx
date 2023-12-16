/* eslint-disable react/prop-types */

import { useState } from 'react';
const SplitTheBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [userExpenses, setUserExpesnse] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const paidByFriend = bill ? bill - userExpenses : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !userExpenses) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -userExpenses);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" onChange={(e) => setBill(+e.target.value)} />
      <label>👧🏻 / 👦🏻 Your expenses</label>
      <input
        type="text"
        onChange={(e) =>
          setUserExpesnse(
            +e.target.value > bill ? userExpenses : +e.target.value
          )
        }
      />
      <label>👫{selectedFriend.name} expenses</label>
      <input type="text" disabled value={paidByFriend} />
      <label>💸 Who is Paying the bill</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Split The Bill</button>
    </form>
  );
};

export default SplitTheBill;
