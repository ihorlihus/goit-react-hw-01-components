import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { FriendListItem } from "./FriendList/FriendListItem";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { AppContainer } from "./App.styled";
import transactions from "../transactions.json";
import friends from "../friends.json";
import data from "../data.json";
import user from "../user.json";

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={data}
        
      />
      <FriendList
        friends={friends}>
        {friends.map(friend => (<FriendListItem
        key={friend.id}
        isOnline={friend.isOnline}
        name={friend.name}
        avatar={friend.avatar}>
      </FriendListItem>))}
      </FriendList>
      
      <TransactionHistory
        items={transactions} />
    </AppContainer>
  );
};
