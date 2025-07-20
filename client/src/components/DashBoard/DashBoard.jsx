import {Navigate,NavLink,Routes,Route} from 'react-router-dom'
import Community from './Community';
import Your from './Your';
import Show from './Show';
import Collaborate from './Collaborate';
import AddProject from './AddProject';
import Collaborators from './Collaborators';
export default function DashBoard(){
    const user=JSON.parse(localStorage.getItem("user"));
    if(!user) return <Navigate to="/"/>
    const getClass=({isActive})=>{
        return isActive?"change selected":"change";
    }
    return(
        <div className="DashBoard">
            <div className='DashBoardTop'>
                <NavLink to="/DashBoard"  className='title'>
                    <div className='DashBoardTopLeft'><h1>Project World</h1> <h3>Hello {user.roll}</h3></div>
                </NavLink>
                <div className='DashBoardTopRight'>
                    <NavLink to="/DashBoard"  className={getClass} end ><div>Communities</div></NavLink>
                    <NavLink to="/DashBoard/Yours" className={getClass} ><div >Yours</div></NavLink>
                </div>
            </div>
            <div className='DashBoardBot'>
                <Routes>
                    <Route index element={<Community/>} ></Route>
                    <Route path='Yours' element={<Your/>} ></Route>
                    <Route path='Yours/AddProject' element={<AddProject/>}></Route>
                    <Route path='Yours/Collaborators' element={<Collaborators/>} ></Route>
                    <Route path="Show" element={<Show/>}></Route>
                    <Route path='Collaborate' element={<Collaborate/>}></Route>
                </Routes>
            </div>
        </div>
    )
}