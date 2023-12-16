/* eslint-disable react/prop-types */
import Item from './Item';

const FriendList = ({ friends, onSelectedFriend, nowSelected }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Item
          friend={friend}
          key={friend.id}
          onSelectedFriend={onSelectedFriend}
          nowSelected={nowSelected}
        />
      ))}
    </ul>
  );
};

export default FriendList;
