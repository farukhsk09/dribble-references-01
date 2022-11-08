import './Main.css';
import {FcLowPriority} from 'react-icons/fc';
import {DiGitMerge} from 'react-icons/di';
import {BiSquareRounded} from 'react-icons/bi';
import {IoIosArrowDown} from 'react-icons/io';
import {BsArrowUpRight} from 'react-icons/bs';
import MrrChart from './MrrChart.js';
function Main(){
    return (
        <div className="main">
            <div className='top-layer'>
                <h1>Executive Summary</h1>
                <h5>Share</h5>
                <div className='button large'><FcLowPriority className='icon'></FcLowPriority>&nbsp;comments</div>
                <div className='button small'>Edit</div>
            </div>
            <div className='filters'>
                <div className='filter'>
                    <div>
                        <DiGitMerge className='icon'></DiGitMerge>
                        <div className='selected'>
                            &nbsp;Scenarios</div>
                    </div>
                    <div>
                        <BiSquareRounded className='icon square'></BiSquareRounded>
                        <div className='selected'>&nbsp;Base case</div>
                        &nbsp;<IoIosArrowDown className='selected-icon adjust'></IoIosArrowDown>
                    </div>
                    <div>
                        <div className='grey'>Year:</div>
                        &nbsp;FY21&nbsp;
                        <IoIosArrowDown className='selected-icon adjust'></IoIosArrowDown>
                    </div>
                    <div>
                        <div className='grey'>Region:</div>
                        &nbsp;EMEA&nbsp;
                        <IoIosArrowDown className='selected-icon adjust'></IoIosArrowDown>
                    </div>
                    <div>
                        <div className='grey'>Channels:</div>
                        &nbsp;Outbound&nbsp;
                        <IoIosArrowDown className='selected-icon adjust'></IoIosArrowDown>
                    </div>
                    <div>
                        <div className='grey'>Segments:</div>
                        &nbsp;Strategic&nbsp;
                        <IoIosArrowDown className='selected-icon adjust'></IoIosArrowDown>
                    </div>
                </div>
            </div>
            <div className='stats'>
                <div className='stats1'>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head'>Net revenue</div>
                            <div className='value'>$3,662,004</div>
                            <div className='subtext'><span><BsArrowUpRight></BsArrowUpRight>0.4%</span> vs last month</div>
                        </div>
                    </div>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head'>Quarterly revenue goal</div>
                            <div className='value'>64%</div>
                            <div className='subtext'>Goal: $2.5M</div>
                        </div>
                    </div>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head'>ARR</div>
                            <div className='value'>$2,452,400</div>
                            <div className='subtext'><span><BsArrowUpRight></BsArrowUpRight>32%</span> vs last quarter</div>
                        </div>
                    </div>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head'>New logos</div>
                            <div className='value'>16</div>
                            <div className='subtext'><span><BsArrowUpRight></BsArrowUpRight>12%</span> vs last month</div>
                        </div>
                    </div>
                </div>
                <div className='stats2'>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head twice'>MRR</div>
                            <MrrChart></MrrChart>
                        </div>
                    </div>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head twice'>MRR Q3</div>
                            <div className='value'>$3,662,004</div>
                            <div className='subtext'><span><BsArrowUpRight></BsArrowUpRight>0.4%</span> vs last month</div>
                        </div>
                    </div>
                </div>
                <div className='stats3'>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head'>MRR</div>
                            <div className='value'>$3,662,004</div>
                            <div className='subtext'><span><BsArrowUpRight></BsArrowUpRight>0.4%</span> vs last month</div>
                        </div>
                    </div>
                    <div className='block small'>
                        <div className='block-text'>
                            <div className='head'>MRR</div>
                            <div className='value'>$3,662,004</div>
                            <div className='subtext'><span><BsArrowUpRight></BsArrowUpRight>0.4%</span> vs last month</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;