/* eslint-disable react/prop-types */
const Item = ({ friend, onSelectedFriend, nowSelected }) => {
  const isSelected = nowSelected?.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt="person image" />
      <h3>{friend.name}</h3>
      <p>
        {friend.balance > 0 ? (
          <span className="green">
            {friend.name} ows you ${friend.balance}
          </span>
        ) : friend.balance < 0 ? (
          <span className="red">
            You owe {friend.name} ${friend.balance * -1}
          </span>
        ) : (
          `You and ${friend.name} are even`
        )}
      </p>
      <button onClick={() => onSelectedFriend(friend)} className="button">
        {isSelected ? 'Close' : 'Select'}
      </button>
    </li>
  );
};

export default Item;