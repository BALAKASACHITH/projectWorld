import Land from "./components/land/Land"
import DashBoard from "./components/DashBoard/DashBoard"
import {Routes,Route} from 'react-router-dom'
export default function App(){
  return(
    <div className="App" >
      <Routes>
        <Route path="/" element={<Land/>}></Route>
        <Route path="/DashBoard" element={<DashBoard/>} ></Route>
      </Routes>
    </div>
  )
}