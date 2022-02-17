import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import s from './FriendList.module.css'

export default function FriendList({friends}) { 

    return (
        <ul className={s.list}>
            {friends.map(friend => { 
                return (
                    <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline:PropTypes.bool,
      })
  )
};
