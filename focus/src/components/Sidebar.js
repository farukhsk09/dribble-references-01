import './Sidebar.css';
import {AiOutlineQuestionCircle,AiTwotoneCloseSquare,AiTwotoneFolderOpen} from 'react-icons/ai';
import {BiSquareRounded} from 'react-icons/bi';
import {MdOutlineExpandMore} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {TbApps} from 'react-icons/tb';
import {IoIosArrowForward} from 'react-icons/io';
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
            <div className="three-button-icon"></div>
            <div className="head">
                <div className="focus">focus</div>
                <div className='icon'><AiOutlineQuestionCircle></AiOutlineQuestionCircle></div>
                <div className="icon cg">
                    <CgProfile></CgProfile>
                </div>
            </div>
        </div>
    );
}

function Contents(){
    return (
        <div className="contents">
            <div className='content'>
                <BiSquareRounded className='icon square'></BiSquareRounded>
                <div className='selected'>Sales capacity</div>
            </div>
            <div className='content'>
                <MdOutlineExpandMore className='icon'></MdOutlineExpandMore>
                <div className='unselected'>
                    <AiTwotoneFolderOpen></AiTwotoneFolderOpen>&nbsp;&nbsp;Boards</div>
            </div>
            <div className='content'>
                <div></div>
                <div className='selected'>
                    <TbApps></TbApps>&nbsp;&nbsp;Executive Summary&nbsp;&nbsp;<IoIosArrowForward className='selected-icon'></IoIosArrowForward></div>
            </div>
            <div className='content'>
                <div></div>
                <div className='unselected'>
                    <TbApps></TbApps>&nbsp;&nbsp;Main Assumptions</div>
            </div>
            <div className='content'>
                <div></div>
                <div className='unselected'>
                    <TbApps></TbApps>&nbsp;&nbsp;Target</div>
            </div>
            <div className='content'>
                <div></div>
                <div className='unselected'>
                    <TbApps></TbApps>&nbsp;&nbsp;Hiring plan</div>
            </div>
            <div className='content'>
                <div></div>
                <div className='unselected'>
                    <TbApps></TbApps>&nbsp;&nbsp;Hiring cohort</div>
            </div>
            <div className='content'>
                <div></div>
                <div className='unselected'>
                    <TbApps></TbApps>&nbsp;&nbsp;Performance</div>
            </div>
            <div className='content'>
                <MdOutlineExpandMore className='icon'></MdOutlineExpandMore>
                <div className='unselected'>
                    <AiTwotoneFolderOpen></AiTwotoneFolderOpen>&nbsp;&nbsp;Blocks</div>
            </div>
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