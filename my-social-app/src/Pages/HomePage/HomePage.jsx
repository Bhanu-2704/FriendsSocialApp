import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Search from "../../components/search/Search.jsx";
import Chats from "../../components/chats/Chats.jsx";
import Bookmarks from "../../components/bookmarks/Bookmarks.jsx";
import Friends from "../../components/friends/Friends.jsx";
import Profile from "../../components/profile/Profile.jsx";

import "./HomePage.css";

export default function HomePage({option}) {

    let components = [<Feed /> , <Search /> , <Chats /> , <Bookmarks /> , <Friends /> , <Profile userId={-1}/>];

    return (
            <div className="bodyContainer">
                <Sidebar />
                {components[option]}
                <Rightbar />
            </div>
    )
}