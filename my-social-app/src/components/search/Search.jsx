import "./search.css";
import { posts } from "../../postsData";

export default function Search() {
  return (
    <div className="search">
      <input placeholder="Search here"/>

      <div className="suggested-content">
        {posts.map((post) => {
          return <div className="content" style={{
            backgroundImage: `url("/posts/post${post.id}.png")`
          }}></div>
        })}
      </div>
    </div>
  )
}

