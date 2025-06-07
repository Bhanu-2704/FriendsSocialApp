import "./Feed.css";
import {posts} from "../../postsData.js";

function Post({post}) {
    return (
        <div className="post">
            <div className="postUserInfo">
                <img src={`/users/user${post.id}.png`} />
                <i>{post.username}</i>
                <p> {post.timeAgo}</p>
            </div> 
            <div className="postImage" style={{ 
                backgroundImage: `url("/posts/post${post.id}.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "450px", 
                width: "100%" 
            }}></div>
            <div className="postIcons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-share"></i>
            </div>
            <p><b>{post.username}</b> &nbsp; {post.description}</p>
        </div>
    )
}

function PostOption() {
    return (
        <div className="postOptions">
            
            <div className="postContent">
                <div className="userImage"></div>
                <input type="text" placeholder="Write post here"/>
            </div>

            <div className="attachOptions">
                <a><i className="fa-solid fa-paperclip"></i> &nbsp; Attach</a>
                <a className="uploadOption"><i className="fa-solid fa-arrow-up"></i> &nbsp; Upload</a>
            </div>
        </div>
    )
}

function Posts() {

    return (
        <div className="posts">
            {posts.map((post) => {
                return (
                    <Post post={post} />    
                )
            })}
        </div>
    )
}

export default function Feed() {
  return (
    <div className="feed">
      <PostOption />
      <Posts />
    </div>
  )
}
