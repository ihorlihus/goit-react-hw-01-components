import { Profile } from "./Profile/Profile";
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
    </div>
  );
};
