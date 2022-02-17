import Profile from "./social-profile/Profile";
import user from "./social-profile/user.json"
import data from "./statistics/data.json"
import friends from "./friend-list/friends.json"
import transactions from './transaction-history/transactions.json'
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
