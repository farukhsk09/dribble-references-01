import './Sidebar.css';
function Sidebar(){
    return <div className="sidebar">
        <TopSection></TopSection>
        <Contents></Contents>
        <Extra></Extra>
    </div>;
}

function TopSection(){
    return (
        <div className="topsect">
            Top
        </div>
    );
}

function Contents(){
    return (
        <div className="contents">
            Contents
        </div>
    );
}

function Extra(){
    return (
        <div className="extra">
            Extra
        </div>
    );
}
export default Sidebar;