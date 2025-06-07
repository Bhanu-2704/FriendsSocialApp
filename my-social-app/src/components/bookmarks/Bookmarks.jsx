import "./bookmarks.css";
import { bookmarks } from "../../postsData";

function Bookmark() {
  return (
    <div></div>
  )
}

export default function Bookmarks() {
  return (
    <div className="bookmarks">
      {(bookmarks.length == 0)? <h2>You have no Bookmarks</h2>:<Bookmark />}
    </div>
  )
}
