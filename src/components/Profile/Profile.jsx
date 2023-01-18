import css from "./profile.module.css"

import user from "../../Data/user.json"
import Description from "./Description/Description";
import Stats from "./Stats/Stats";

const Profile = () => {
    return (
        <div className={css.profile}>
 
            <Description 
            username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          
            />
            <Stats stats={user.stats}/>
  
</div>
    )
}

export default Profile;