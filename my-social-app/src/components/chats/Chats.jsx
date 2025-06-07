import "./chats.css";
import { activeUsers } from "../../postsData";

export default function Chats() {
  return (
    <div className="chats">
      <input placeholder="Search Person"/>

      <div className="friends">
        {activeUsers.map((user) => {
            return (<div className="friend">
                    <div className="friendImage" style={{
                        backgroundImage: `url("/users/user${user.id}.png")`
            }}></div>
            <div className="msg">
                <b>{user.username}</b>
                <p>{user.lastmsg} &nbsp; &nbsp; &nbsp; &nbsp;<i>{user.timeAgo}</i> </p>
            </div>
        </div>)
        })}

      </div>
    </div>
  )
}
