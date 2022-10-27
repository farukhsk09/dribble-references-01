import './Sidebar.css';
import { AiOutlineQuestionCircle, AiTwotoneCloseSquare, AiTwotoneFolderOpen } from 'react-icons/ai';
import { BiSquareRounded } from 'react-icons/bi';
import { MdOutlineExpandMore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { TbApps } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import { DiGitMerge ,DiZend} from 'react-icons/di';
import { RiSettingsLine, RiHistoryLine } from 'react-icons/ri';
import {SiSalesforce,SiLooker} from 'react-icons/si';
function Sidebar() {
    return <div className="sidebar">
        <TopSection></TopSection>
        <Contents></Contents>
        <Extra></Extra>
    </div>;
}

function TopSection() {
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

function Contents() {
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
                    <TbApps></TbApps>&nbsp;&nbsp;Executive Summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='selected-icon'></IoIosArrowForward></div>
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

function Extra() {
    return (
        <div className="extra">
            <div className='content'>
                <IoArrowUpCircleOutline className='icon'></IoArrowUpCircleOutline>
                <div className='selected'>
                    &nbsp;Automated imports</div>
            </div>
            <div className='partners'>
                <div className='content center'>
                    <SiSalesforce className='icon'></SiSalesforce>
                    <div className='selected'>
                        &nbsp;Saleforce</div>
                </div>
            </div>
            <div className='partners'>
                <div className='content center'>
                    <SiLooker className='icon'></SiLooker>
                    <div className='selected'>
                        &nbsp;Looker</div>
                </div>
            </div>
            <div className='content'>
                <RiHistoryLine className='icon'></RiHistoryLine>
                <div className='selected'>
                    &nbsp;History</div>
            </div>
            <div className='content'>
                <DiGitMerge className='icon'></DiGitMerge>
                <div className='selected'>
                    &nbsp;Scenarios</div>
            </div>
            <div className='content'>
                <RiSettingsLine className='icon'></RiSettingsLine>
                <div className='selected'>
                    &nbsp;Settings</div>
            </div>
            <div className='partners'>
                <div className='content center'>
                    <DiZend className='icon'></DiZend>
                    <div className='selected'>
                        &nbsp;Playground</div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;