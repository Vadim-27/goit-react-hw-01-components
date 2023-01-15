import Profil from "./components/Profile/Profile";
import  user  from "./Data/user.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profil
        user={user}
      // username={user.username}
      // tag={user.tag}
      // location={user.location}
      // avatar={user.avatar}
      // stats={user.stats}
      />

    </div>
  );
};
