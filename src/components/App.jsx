import Profile from "./social-profile/Profile";
import user from "./social-profile/user.json"
import data from "./statistics/data.json"
import friends from "./friend-list/friends.json"
import Statistics from "./statistics/Statistics";
import FriendList from './friend-list/FriendList'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={data} />;
      </div>
      <div>
        <FriendList friends={friends}/>
      </div>
    </div>
    
  );
};
