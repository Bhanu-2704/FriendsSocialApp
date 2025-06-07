import "./profile.css";
import { posts } from "../../postsData";

export default function Profile({userId}) {
    let user = {};
    for (let i=0 ; i<posts.length ; i++) {
        if (posts[i].id == userId) {
            user= posts[i];
        }
    }
  return (
    <div className="profile">
      <div className="profileImage" style={
        (userId != -1)? {backgroundImage: `url("/users/user${userId}.png")`}:{backgroundImage: `url("../src/assets/kajol.png")`}
      }></div>
      <div className="profileInfo">
        {(userId != -1)? <b>{user.username}</b>:<b>Kajol Mukherjee Devgan</b>}
        {(userId != -1)? <i>{user.timeAgo}</i>:<i></i>}
      </div>
      <hr></hr>

      {(userId == -1)? <b>No Posts yet</b>: <div className="pprofilePosts" style={{backgroundImage: `url("/posts/post${user.id}.png")`}}></div>}
    </div>
  )
}
