import Profile from "./social-profile/Profile";
import user from "./social-profile/user.json"
import data from "./statistics/data.json"
import Statistics from "./statistics/Statistics";

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
    </div>
    
  );
};
