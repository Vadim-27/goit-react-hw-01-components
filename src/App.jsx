import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsCard from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

import data from "./Data/data.json";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile/>
      <Statistics title="Upload stats" items={data} />
      <FriendsCard items={friends} />
      <TransactionHistory 
      items={transactions}
      />
    </div>
  );
};
