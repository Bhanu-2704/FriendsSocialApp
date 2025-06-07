import "./Rightbar.css";
import {activeUsers} from "../../postsData.js";

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="activeFollowers">
          <ul>
            {
              activeUsers.map((user) => {
                return (<li>
                  <div className="activeUserInfo">
                    <div className="userImage" style={{
                        backgroundImage: `url("/users/user${user.id}.png")`
                      }}>
                        <div className="onlineBadge"></div>
                      </div>
                    <p>{user.username}</p>
                  </div> 
                </li>)
              })
            }
          </ul>
        </div>
    </div>
  )
}
