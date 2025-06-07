import "./friends.css";
import { posts } from "../../postsData";

export default function Friends() {
  return (
    <div className="friendsList">
        {posts.map((post) => {
            return (
                <div className="friendInfo">
                    <div className="friendPic" style={{
                        backgroundImage: `url("/users/user${post.id}.png")`
                    }}></div>
                    <div className="friendData">
                        <b>{post.username}</b>
                        <i>Last Posted: {post.timeAgo}</i>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
