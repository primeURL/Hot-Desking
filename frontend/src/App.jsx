import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import BookDesk from './components/BookDesk'
import SingUp from "./components/SingUp";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import SingleRoom from "./components/singleRoom";
import Rooms from "./components/Rooms";
import CreateRooms from "./components/CreateRooms";
function App() {

  return (
   <>
    <NavBar/>
    <Routes>
        <Route path="bookdesk" element={<BookDesk/>}></Route>
        <Route path="signup" element={<SingUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="createrooms" element={<CreateRooms/>}></Route>
        <Route path="user/:id/verify/:token" element={<EmailVerify />} />
        <Route path="rooms/:location/:checkIn/:checkOut" element={<Rooms />} />
        <Route path="singleroom/:id" element={<SingleRoom />} />
        {/* <Route path="workoutlog" element={<WorkoutLog />}></Route> */}
        {/* <Route
          path="basic"
          element={<Protected Component={BasicTimer} />}
        ></Route> */}
        
      </Routes>
   </>
  )
}

export default App
