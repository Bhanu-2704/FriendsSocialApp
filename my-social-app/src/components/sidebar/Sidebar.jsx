import "./Sidebar.css";
import kajolPic from '../../assets/kajol.png';
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">

      </div>

      <div className="sidebarOptions">
          <ul>
            <li><NavLink to="/"  className={({isActive}) => isActive? "active-link":"not-active"}><i class="fa-solid fa-house"></i> &nbsp; &nbsp;Home</NavLink></li>
            <li><NavLink to="/search" className={({isActive}) => isActive? "active-link":"not-active"}><i class="fa-solid fa-magnifying-glass"></i> &nbsp; &nbsp;Search</NavLink> </li>
            <li><NavLink to="/chats" className={({isActive}) => isActive? "active-link":"not-active"}><i class="fa-solid fa-message"></i>&nbsp; &nbsp;Chats</NavLink></li>
            <li><NavLink to="/bookmarks" className={({isActive}) => isActive? "active-link":"not-active"}><i class="fa-solid fa-bookmark"></i>&nbsp; &nbsp;Bookmarks</NavLink> </li>
            <li><NavLink to="/friends" className={({isActive}) => isActive? "active-link":"not-active"}><i class="fa-solid fa-user-group"></i>&nbsp; &nbsp;Friends</NavLink> </li>
            <li><NavLink to="/profile" className={({isActive}) => isActive? "active-link":"not-active"}><i class="fa-solid fa-user"></i>&nbsp; &nbsp;Profile</NavLink> </li>
          </ul>
      </div>
      
    </div>
  )
}