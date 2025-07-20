import {Navigate,NavLink,Routes,Route} from 'react-router-dom'
import Community from './Community';
import Your from './Your';
export default function DashBoard(){
    const user=JSON.parse(localStorage.getItem("user"));
    if(!user) return <Navigate to="/"/>
    return(
        <div className="DashBoard">
            <div className='DashBoardTop'>
                <NavLink to="/DashBoard"  className='title'>
                    <div className='DashBoardTopLeft'><h1>Project World</h1></div>
                </NavLink>
                <div className='DashBoardTopRight'>
                    <NavLink to="/DashBoard"><div className='Commuities' >Communities</div></NavLink>
                    <NavLink to="/DashBoard/Yours"><div className='Yours'>Yours</div></NavLink>
                </div>
            </div>
            <div className='DashBoardBot'>
                <Routes>
                    <Route index element={<Community/>} ></Route>
                    <Route path='Yours' element={<Your/>} ></Route>
                </Routes>
            </div>
        </div>
    )
}