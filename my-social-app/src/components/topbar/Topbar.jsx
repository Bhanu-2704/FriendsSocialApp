import "./Topbar.css";

function TopbarLogo() {
    return (
        <div className="topbarLogo">
            <i class="fa-solid fa-handshake-slash"></i>
            <b>Mitra</b>
        </div>
    )
}

function TopbarSearch() {
    return (
        <div className="topbarSearch">
            <div className="searchBox">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder="search for people" ></input>
            </div>
        </div>
    )
}

function TopbarLinks() {
    return (
        <div className="topbarLinks">
            <a>Homepage</a>
            <a>Timeline</a>
            <div className="topbarIcons">
                <i class="fa-solid fa-user"><span>1</span></i>
                <i class="fa-solid fa-message"><span>2</span></i>
                <i class="fa-solid fa-bell"><span>2</span></i>
            </div>
            <div className="topbarProfile"></div>
        </div>
    )
}

export default function Topbar() {
    return (
        <div className="topbar">
            <TopbarLogo />
            <TopbarSearch />
            <TopbarLinks />
        </div>
    )
}
