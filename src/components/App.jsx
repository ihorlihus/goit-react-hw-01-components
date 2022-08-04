import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { FriendListItem } from "./FriendList/FriendListItem";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import friends from "../friends.json";
import data from "../data.json";
import user from "../user.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        folovers={user.stats.folovers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList>
        <FriendListItem
          friends={friends} />
      </FriendList>

      <TransactionHistory
        items={transactions} />
    </div>
  );
};
