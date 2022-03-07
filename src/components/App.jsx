import Profile from "./social-profile/Profile";
import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from '../data/transactions.json'
import Statistics from "./statistics/Statistics";
import FriendList from './friend-list/FriendList'
import TransactionHistory from './transaction-history/TransactionHistory'


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
      <div>
        <TransactionHistory items={transactions}/>
      </div>
    </div>
    
  );
};
