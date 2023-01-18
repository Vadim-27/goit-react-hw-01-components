import Profil from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsCard from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
// import user from "./Data/user.json";
import data from "./Data/data.json";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profil
      //   user={user}
      // username={user.username}
      // tag={user.tag}
      // location={user.location}
      // avatar={user.avatar}
      // stats={user.stats}
      />
      <Statistics title="Upload stats" items={data} />
      <FriendsCard items={friends} />
      <TransactionHistory 
      items={transactions}
      />
    </div>
  );
};
